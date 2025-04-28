import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Définition du type pour les métadonnées d'un article
export interface PostMetadata {
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
  slug: string;
  readTime: string;
  tags?: string[];
}

// Chemin vers le dossier des articles de blog
const postsDirectory = path.join(process.cwd(), 'src/content/blogs');

// Fonction pour estimer le temps de lecture d'un texte
export function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/g).length;
  const readTime = Math.ceil(wordCount / wordsPerMinute);
  return `${readTime} min de lecture`;
}

// Fonction pour récupérer les slugs de tous les articles
export function getAllPostSlugs(): string[] {
  try {
    // Vérifier si le dossier existe
    if (!fs.existsSync(postsDirectory)) {
      return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames
      .filter(fileName => fileName.endsWith('.mdx'))
      .map(fileName => fileName.replace(/\.mdx$/, ''));
  } catch (error) {
    console.error('Erreur lors de la récupération des slugs :', error);
    return [];
  }
}

// Fonction pour récupérer les métadonnées de tous les articles
export function getAllPostsMetadata(): PostMetadata[] {
  try {
    // Vérifier si le dossier existe
    if (!fs.existsSync(postsDirectory)) {
      return [];
    }

    const slugs = getAllPostSlugs();
    const posts = slugs
      .map(slug => {
        const metadata = getPostBySlug(slug);
        return metadata;
      })
      .sort((a, b) => {
        // Trier par date (du plus récent au plus ancien)
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });

    return posts;
  } catch (error) {
    console.error('Erreur lors de la récupération des métadonnées :', error);
    return [];
  }
}

// Fonction pour récupérer un article par son slug
export function getPostBySlug(slug: string): PostMetadata & { content: string } {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    
    // Vérifier si le fichier existe
    if (!fs.existsSync(fullPath)) {
      throw new Error(`Article non trouvé: ${slug}`);
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const readTime = calculateReadTime(content);

    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt || '',
      coverImage: data.coverImage || '/images/blog/default.jpg',
      readTime,
      tags: data.tags || [],
      content,
    };
  } catch (error) {
    console.error(`Erreur lors de la récupération de l'article ${slug} :`, error);
    // Retourner un objet vide en cas d'erreur
    return {
      slug: '',
      title: 'Article non trouvé',
      date: '',
      excerpt: '',
      coverImage: '/images/blog/default.jpg',
      readTime: '',
      content: '',
    };
  }
}

// Fonction pour récupérer les n articles les plus récents
export function getRecentPosts(count: number = 3): PostMetadata[] {
  const allPosts = getAllPostsMetadata();
  return allPosts.slice(0, count);
} 
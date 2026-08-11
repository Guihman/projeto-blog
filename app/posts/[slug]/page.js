import { posts } from '@/data/posts';
import { notFound } from 'next/navigation';
import styles from './post.module.css';

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className={styles.postContainer}>
      <header className={styles.header}>
        <span className={styles.category}>{post.category}</span>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.meta}>
          <span>Por {post.author}</span> • <span>{post.date}</span>
        </div>
      </header>

      <div className={styles.imageWrapper}>
        <img src={post.image} alt={post.title} className={styles.image} />
      </div>

      <div className={styles.content}>
        <p>{post.content}</p>
      </div>
    </article>
  );
}
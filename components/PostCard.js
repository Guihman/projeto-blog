import Link from 'next/link';
import styles from './PostCard.module.css';

export default function PostCard({ post }) {
  return (
    <article className={styles.card}>
      <Link href={`/posts/${post.slug}`}>
        <div className={styles.imageWrapper}>
          <img src={post.image} alt={post.title} className={styles.image} />
        </div>
      </Link>
      <div className={styles.content}>
        <span className={styles.category}>{post.category}</span>
        <h2 className={styles.title}>
          <Link href={`/posts/${post.slug}`}>{post.title}</Link>
        </h2>
        <p className={styles.excerpt}>{post.excerpt}</p>
        <span className={styles.date}>{post.date}</span>
      </div>
    </article>
  );
}
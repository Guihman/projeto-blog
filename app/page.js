import { posts } from '@/data/posts';
import PostCard from '@/components/PostCard';
import styles from './page.module.css';

export default function Home() {
  const featuredPost = posts[0];
  const recentPosts = posts.slice(1);

  return (
    <div className={styles.container}>
      {/* Post em Destaque */}
      {featuredPost && (
        <section className={styles.hero}>
          <div className={styles.heroImageWrapper}>
            <img src={featuredPost.image} alt={featuredPost.title} className={styles.heroImage} />
          </div>
          <div className={styles.heroContent}>
            <span className={styles.category}>{featuredPost.category}</span>
            <h1 className={styles.heroTitle}>{featuredPost.title}</h1>
            <p className={styles.heroExcerpt}>{featuredPost.excerpt}</p>
            <span className={styles.date}>{featuredPost.date}</span>
          </div>
        </section>
      )}

      {/* Grid de Posts Recentes */}
      <section className={styles.gridSection}>
        <h2 className={styles.sectionTitle}>Últimas Publicações</h2>
        <div className={styles.grid}>
          {recentPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
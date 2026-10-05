import styles from './Tag.module.css';

export function Tag({ children }: { children: string }) {
  return <span className={styles.tag}>{children}</span>;
}

export function TagList({ tags, label }: { tags: readonly string[]; label: string }) {
  if (tags.length === 0) return null;

  return (
    <ul className={styles.list} aria-label={label} role="list">
      {tags.map((tag, i) => (
        <li key={`${tag}-${i}`}>
          <Tag>{tag}</Tag>
        </li>
      ))}
    </ul>
  );
}

import styles from './Tag.module.css';

export function Tag({ children }: { children: string }) {
  return <li className={styles.tag}>{children}</li>;
}

export function TagList({ tags, label }: { tags: readonly string[]; label: string }) {
  return (
    <ul className={styles.list} aria-label={label}>
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </ul>
  );
}

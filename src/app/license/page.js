// pages/license.js
import styles from '@/styles/Legal.module.css';

export default function License() {
  return (
    <div className={styles.container}>
      <h1>License Agreement</h1>
      <p>Last updated: [Date]</p>
      <h2>1. Grant of License</h2>
      <p>We grant you a limited, non-exclusive, non-transferable license to use Paper Minecraft for personal, non-commercial purposes.</p>
      <h2>2. Restrictions</h2>
      <p>You may not copy, modify, distribute, sell, or lease any part of Paper Minecraft or its content. You may not reverse engineer or attempt to extract the source code of the game.</p>
      <h2>3. Ownership</h2>
      <p>Paper Minecraft and all related content remain the exclusive property of [Your Company Name]. This license does not grant you any ownership rights to the game or its content.</p>
      <h2>4. Termination</h2>
      <p>This license is effective until terminated. Your rights under this license will terminate automatically without notice if you fail to comply with any of its terms.</p>
      {/* Add more sections as needed */}
    </div>
  );
}
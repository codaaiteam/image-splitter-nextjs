// pages/privacy.js
import styles from '@/styles/Legal.module.css';

export default function Privacy() {
  return (
    <div className={styles.container}>
      <h1>Privacy Policy</h1>
      <p>Last updated: [Date]</p>
      <h2>1. Information We Collect</h2>
      <p>We collect minimal information necessary for the functioning of Paper Minecraft, such as game progress and settings.</p>
      <h2>2. How We Use Your Information</h2>
      <p>We use the collected information solely for the purpose of providing and improving the Paper Minecraft experience.</p>
      <h2>3. Data Security</h2>
      <p>We implement reasonable security measures to protect your information from unauthorized access or disclosure.</p>
      <h2>4. Third-Party Services</h2>
      <p>Paper Minecraft may use third-party services for analytics or advertising. These services may collect information as specified in their respective privacy policies.</p>
      {/* Add more sections as needed */}
    </div>
  );
}
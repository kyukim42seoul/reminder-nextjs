import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <div>
        <input placeholder="input A" />
      </div>
      <div>
        <input placeholder="input B" />
      </div>
    </div>
  );
}

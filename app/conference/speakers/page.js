import Link from "next/link";
import styles from "../conference.module.css";

export let speakerJson = {};

async function fetchSpeakers(){
  const speakerJsonUrl = "https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/speakers.json";
  const response = await fetch(speakerJsonUrl, {next: {revalidate: 20} });
  const data = await response.json();
  speakerJson = data;
  return data;
}

export default async function Page() {
  const data = await fetchSpeakers();

  return (
    <>
      <div className={styles.parentContainer}>
        <div className="self-start whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100">
          Last Rendered: {new Date().toLocaleTimeString()}
        </div>
        <h1>Welcome to Globomantics Speakers</h1>
        {
          data.speakers.map(({id, name, bio}) =>
            <div key={id} className={styles.infoContainer}>
              <Link 
                className={styles.bgLinks}
                href={`/conference/speakers/${name}`}
                >
                <h3 className={styles.titleText}>{name}</h3>
              </Link>
              <h5 className={styles.descText}>{bio}</h5>
            </div>
          )
          }
      </div>
    </>
  );
}

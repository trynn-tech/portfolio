import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import Terminal from 'react-console-emulator';

const style = {
  color: "rgba(128, 255, 128, 0.8)",
  textShadow: "0 0 1ex rgba(51, 255, 51, 1), 0 0 2px rgba(255, 255, 255, 0.8)",
};

const Home: NextPage = () => {
  const router = useRouter();
  const commands = {
    echo: {
      description: 'Echo a passed string.',
      usage: 'echo <string>',
      fn: (...args: string[]) => args.join(' ')
    },
    resume: {
      description: 'Redirects you to my resume page',
      usage: 'resume',
      fn: (...args: string[]) => router.push(`/resume`)
    },
    social: {
      description: 'List relevant professional social media',
      usage: 'social',
      fn: (...args: string[]) => {
        return (
          <ul>
            <li><a href="https://www.linkedin.com/in/trynn2501/">https://www.linkedin.com/in/trynn2501/</a></li>
            <li><a href="https://github.com/Trynn2501" className="whitespace-pre">https://github.com/Trynn2501</a></li>
            <li><a href="mailto:tristen@trynn.tech">Email</a></li>
          </ul>
        )
      } 
    }
  }

  return (
    <>
      <Head>
        <title>Howdy Partner!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="tv">
        <div className="noise"></div>
        <div className="overlay"></div>
        <div className="terminal px-12" id="terminal">
          <p className="min-[481px]:mr-[50%] pt-12"> Hello, My name is Trynn Zala your friendly neighborhood console cowboy. My life is a sequence of strange events.
            So I have become a bit of an expert solving such strange events that happen through electricity,
            language, and society. Type &lsquo;help&rsquo; into the prompt below to see a list of currently
            available functions of this website. Please contact me at <a href="mailto:tristen@trynn.tech">Tristen@trynn.tech</a>
          </p>
          <nav className="menu flex flex-col">
            <Link href="/resume"><a className="mt-4 indent-2">Resume</a></Link>
            <Link href="/resume"><a className="mt-4 indent-6">Blog &#40;Under Construction&#41;</a></Link>
            <Link href="https://worlddomination.ca/"><a className="mt-4 indent-10">Projects</a></Link>
          </nav>
          <Terminal
            className="terminal"
            commands={commands}
            ignoreCommandCase
            welcomeMessage={''}
            promptLabel={'me@React:~$'}
            inputStyle={style}
            promptLabelStyle={style}
            messageStyle={style}
          />
        </div>
      </main>
    </>
  );
};

export default Home;

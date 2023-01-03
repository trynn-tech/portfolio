import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import { Radar, RadarChart, PolarGrid,
    PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Resume: NextPage = () => {

  const router = useRouter()

  const data = [
      { name: 'Entertaining', x: 69 },
      { name: 'Spooky', x: 84 },
      { name: 'Exhausted', x: 90 },
      { name: 'Extraverted', x: 88 },
      { name: 'Persuasive', x: 66 },
      { name: 'Frustrated', x: 45 },
      { name: 'Clever', x: 95 },
      { name: 'Perfectionist', x: 99 },
  ];

  return (
    <>
      <Head>
        <title>Trynn &apos; s Resume</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="tv">
        <div className="noise"></div>
        <div className="overlay"></div>
        <div className="px-12">
          <span onClick={() => router.back()} className="absolute top-10 cursor-pointer inline-flex">
            <FontAwesomeIcon icon={faChevronLeft} className="w-10 mt-[2px] max-h-6"/><p>Home</p>
          </span>
          <div className="text-center mb-10">
            <h2 className="text-5xl pt-10"><b>TOP SECRET</b></h2>
            <h3 className="text-xl">Cyber Pyre</h3>
            <a className="text-green-500 hover:text-green-600 hover:underline" href="/documents/Resume.pdf"><small>Print Document</small></a>
          </div>
          <h1 className="text-center text-3xl mb-5">Tristen Young</h1>
          <div className="flex ml-8 space-x-32 fill-current mb-4">
            <Image src="/images/trynn.jpg" alt="Photo of Trynn at dB Engineering" layout="fixed" width="200px" height="250px" />
            <p>Aliases: Trynn, Triscuit, Mr.T<br className="mb-2"/>
                D.O.B: March 23, 1337<br className="mb-2"/>
                Place of Birth: Texas<br className="mb-2"/>
                Sex: Male<br className="mb-2"/>
                Height: 175.26 cm<br className="mb-2"/>
                Hair: Brown<br className="mb-2"/>
                Eyes: Brown<br className="mb-2"/>
                Nationality: American<br/>
            </p>
            <RadarChart height={300} width={450}
              outerRadius="80%" data={data}>
              <PolarGrid />
              <PolarAngleAxis dataKey="name" />
              <PolarRadiusAxis />
              <Radar dataKey="x" stroke="green"
              fill="green" fillOpacity={0.5} />
            </RadarChart>
          </div>
          <div className="grid grid-cols-2 gap-14">
            <div className="half-left">
              <div className="mb-8">
                <h4 className="text-xl"><u>Syndicate History&emsp;&emsp;&emsp;&emsp;</u></h4>
                <div className="my-5">
                  <p><b>Fieldsend Marketing,</b> Remote<br/>
                  <i>Freelance Software Developer</i><br/>
                  <small>January 2019 - Present</small>
                  </p>
                  <ul className="list-disc ml-10">
                    <li>Managed site migration for progearrental.com utilizing load-balancing to maintain the 99% uptime requirement</li>
                    <li>Integrated progearrental.com&apos;s SQL database to sync and sort itself into the company&apos;s CRM.</li>
                    <li>Built and managed alpha-stim.com including custom PHP and security measures to meet HIPAA compliance from 2019-2021 per client specifications.</li>
                    <li>Contracted by The Eleven Group to make front end designs compatible with search engine optimization best-practices in Angular for Interstate Batteries.</li>
                    <li>Contracted by The Eleven Group to use web scraping with Python and Selenium to gather locations and descriptions from Google Business Profiles for Interstate All Battery Center market analysis.</li>
                  </ul>
                </div>
                <div>
                  <p><b>dB Engineering,</b> Mansfield TX<br/>
                  <i>Director of R&D, Draftsman</i><br/>
                  <small>July 2016 - April 2017</small>
                  </p>
                  <ul className="list-disc ml-10">
                    <li>Oversaw ISO 9001:2008 practices, documentation, and renewal of certification in 2017.</li>
                    <li>Optimized water-jet paths using AutoCAD to improve material pricing for clients and reducing annual cost by 6%.</li>
                    <li>Digitized and automated paper engineering drawings.</li>
                  </ul>
                </div>
              </div>
              <div className="mb-8">
                <h4 className="text-xl"><u>Previous Missions&emsp;&emsp;&emsp;&emsp;</u></h4>
                <div className="my-5">
                  <p><b>Gymoranda Fitness Application</b><br/>
                  <i>Software Developer</i><br/>
                  <small>January 2020 - March 2021</small>
                  </p>
                  <ul className="list-disc ml-10">
                    <li>Collaborated with a team to create a networked Java application to manage a theoretical gym scheduling for different tiers of users.</li>
                  </ul>
                </div>
                <div>
                  <p><b>ID Portal Application</b><br/>
                  <i>Software Developer, Git Master</i><br/>
                  <small>September 2021 - May 2022</small>
                  </p>
                  <ul className="list-disc ml-10">
                    <li>Worked as full-stack developer and Git master for Rogue Media to create a student identification application for web, IOS, and Android utilizing React, React-native, and Firebase.</li>
                  </ul>
                </div>
              </div>
              <div className="training">
                <h4 className="text-xl"><u>Criminal Training&emsp;&emsp;&emsp;&emsp;</u></h4>
                <div className="my-5">
                  <p><b>Arizona State University</b><br/>
                  <i>Bachelor of Science Software Engineering Degree Major GPA 3.02</i><br/>
                  <small>September 2017 - August 2022</small>
                  </p>
                </div>
              </div>
            </div>
            <div className="half-right">
              <div className="mb-8">
                <h4 className="text-xl"><u>Psychological Profile&emsp;&emsp;&emsp;&emsp;</u></h4>
                <p className="mt-5 indent-10">Subject is ambitious and is obsessed with history and technology. A subtle follower of the rationalist community. Calm and observant often solving problems backwards. Copes with tragedy through the use of dark humor; Often a sign of stress. Most likely pursued engineering due to his rule-utilitarian training at a young age. Often very loyal to close friends and colleagues often to the subject&apos;s detriment. Suprisingly good interpersonal skills and social coordination due to subject&apos;s expierences in Theater during his earlier years. Subject will focus on activities for an extended period of time, which leads to both positive and unsatisfactory results. Best to persuade the subject through abstract ideology and unique problems</p>
              </div>
              <div className="skills">
                <h4 className="text-xl"><u>Skills&emsp;&emsp;&emsp;&emsp;</u></h4>
                <ul className="list-disc ml-10 mt-5">
                  <li>Javascript/Typescript</li>
                  <li>C/C++</li>
                  <li>Assembly</li>
                  <li>Visual Basic</li>
                  <li>XML/HTML</li>
                  <li>CSS</li>
                  <li>JSX</li>
                  <li>AJAX</li>
                  <li>REST-level-2</li>
                  <li>Docker</li>
                  <li>GraphQL</li>
                  <li>Bash</li>
                  <li>Visual Studio Code</li>
                  <li>Emacs</li>
                  <li>Vim</li>
                  <li>Eclipse</li>
                  <li>Linux</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Resume;

"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog } from "@headlessui/react";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/solid";

export default function MeetOurFellows() {
  const [isNewOpen, setIsNewOpen] = useState(false);
  const [newIndex, setNewIndex] = useState(0);
  const [isOldOpen, setIsOldOpen] = useState(false);
  const [oldIndex, setOldIndex] = useState(0);

  const fellowsold = [
    {
      name: "Shivesh Kumar Amit ",
      image: "/images/images2024/Shivesh Kumar Amit.png",
      alt: "Shivesh Kumar Amit ",
      description:
        "From a young age, I was fascinated by politics, and its inner workings. This passion later drew me towards political science, which deepened my curiosity and interest in the world of policy and political consultancy. The Mukherjee fellowship has proven to be the ideal platform for me to explore this field. The past year in the fellowship has been an incredibly rewarding learning experience, stimulating my intellectual growth. It has significantly broadened my understanding of Indian politics and the intricacies of policymaking.",
    },
    {
      name: "Yashvi Rana",
      image: "/images/images2024/yashvi rana.png",
      alt: "Yashvi Rana",
      description:
        "Being part of Mukherjee Fellowship was a transformative learning experience. I was working closely with Member of Parliament Smt. Poonam Mahajan ji over the course of the fellowship and gained invaluable insights into the inner workings of parliamentary offices. This hands-on experience not only sharpened my skills in policy analysis and political engagement but also empowered me to make a tangible impact on the ground through effective collaboration and cooperation.",
    },
    {
      name: "Ujjwal Singh",
      image: "/images/images2024/Ujjwal Singh.png",
      alt: "Ujjwal Singh",

      description:
        "Driven by the excitement of working closely with a Member of Parliament and witnessing the 2024 Lok Sabha elections, I joined the Mukherjee Fellowship. My assignment with Shri Dharmendra Pradhan, particularly my three-month stint in Sambalpur, Odisha, was an eye-opening and unforgettable journey into the heart of India's democracy.",
    },
    {
      name: "Utsav Utkrisht ",
      image: "/images/images2024/utsav utkrshit_.png",
      alt: "Utsav Utkrisht ",

      description:
        "I had the privilege of closely working with BJP National General Secretary, Shri Sunil Bansal, gaining firsthand insight into the vast scope and intricate dynamics of the Lok Sabha elections in our vast nation. Playing a pivotal role in supporting my esteemed political mentor, this experience proved to be both unforgettable and profoundly enlightening.",
    },
    {
      name: "Abhinav Narta",
      image: "/images/images2024/Abhinav Narta.png",
      alt: "Abhinav Narta",
      description:
        "I am Abhinav, a law graduate with an LL.M. in Intellectual Property Rights & Technology Law,. This fellowship has significantly contributed to my personal growth and career interests, deepening my expertise in political consulting and policymaking while enhancing my strategic and analytical skills. It has equipped me with the tools and insights necessary for a successful future in this field.",
    },
    {
      name: "Yadukrishna C S",
      image: "/images/images2024/Yadukrishna CS.png",
      alt: "Yadukrishna C S",
      description:
        "I'm Yadukrishna from Kerala, and I've always been passionate about politics and policy. Choosing the Mukherjee Fellowship has been a source of immense pride for me. This unique opportunity in India allows me to engage directly with the system, becoming an integral part of it, and driving meaningful change for myself and those around me.",
    },
    // {
    //   name: "ARUNDAS A",
    //   image: "/arun.jpg",
    //   alt: "ARUNDAS A",
    //   description:
    //     "My name is Arundas A. After completing my post-graduation, I joined the Mukherjee Fellowship. It was a life-changing decision, one of the best I've made in recent years. Spending a year with the team as a fellow was truly inspirational and greatly boosted my confidence. It also opened my eyes to new horizons.",
    // },
    {
      name: "Ananya Vinod",
      image: "/images/images2024/Ananya Vinod.png",
      alt: "Ananya Vinod",
      description:
        "Engaging in policy and political consulting at the Office of my Minister was an enriching experience, offering deep insights into campaigning, communications and strategic decision-making. It honed my analytical skills, enabled impactful contributions to policies, and provided a dynamic environment that fostered continuous learning. The collaborative efforts and challenges made it truly rewarding.",
    },
    {
      name: "Reeva Godara",
      image: "/images/images2024/Reeva Godara.png",
      alt: "Reeva Godara",
      description:
        "Working as a Mukherjee Fellow in the Haryana Chief Minister's Office was a wonderful experience. It allowed me to engage directly with political leaders, learning effective political and policy strategies. I developed communication skills, political reporting expertise, and impactful governance practices, and gained valuable experience in election work.",
    },
    {
      name: "Diksha Bohra",
      image: "/images/images2024/Diksha Bohra.png",
      alt: "Diksha Bohra",

      description:
        "As someone who developed a keen interest in politics, I joined the Mukherjee Fellowship to gain deeper insights into the political and policy landscape which offered me multidimensional perspectives.One of the most impactful experiences was working on the election campaign of Shri Shashank Mani ji in Deoria which allowed me to closely monitor the election process and understand the intricacies of campaign strategies, voter engagement, and grassroots mobilization. Post-elections, I had the privilege of working in the office of MP Shri Shashank Mani. Under his mentorship, I not only honed my skills but also gained invaluable firsthand experience in the political arena. I was involved in various aspects of policy-making, from drafting proposals to understanding legislative processes. Additionally, the fellowship provided numerous networking opportunities with seasoned politicians, policymakers, and experts. Engaging in discussions and debates with them enriched my knowledge and broadened my perspectives on various political and social issues.",
    },
    {
      name: "Archana M",
      image: "/images/images2024/M. Archana.png",
      alt: "John Doe",
      description:
        "As a UPSC aspirant, the Mukherjee fellowship has been an invaluable training ground for my aspirations. Addressing public grievances, engaging in legislative works and participating in election campaigns across Tamil Nadu have provided extensive exposure to political and policy fields. Beyond professional skills, I am grateful for gaining valuable life lessons essential for a civil servant. ",
    },
    {
      name: "Sankarshana K K",
      image: "/images/images2024/Sankarshana KK.png",
      alt: "Sankarshana K K",
      description:
        "This fellowship has thought me the nitty grities of policy making and helped me a lot in my domain change from being at investment/custodian banker firm. The experience has imbibed me with required qualities such as persistence, perseverance and persuasion which are essential in whole political sphere and specifically to provide good governance.",
    },
    // Replicating the first 9 fellows to reach 21 total
    {
      name: "Tejaswi Singh ",
      image: "/images/images2024/Tejaswi Singh.png",
      alt: "Tejaswi Singh ",
      description:
        "I applied for the Mukherjee Fellowship soon after graduating from Delhi University with a degree in History. With a passion for understanding the intricate layers of society through the lenses of history and sociology, the Mukherjee Fellowship was the right decision as it allowed me to build on my lived experience, identify critical problems, and develop targeted strategies to tackle them. Contributing to the General Elections of the world's largest democracy was an immersive experience in itself. This transformative year changed my perspective on multiple issues and will help me drive meaningful change in times to come.",
    },
    {
      name: "Pushyamitra Joshi",
      image: "/images/images2024/Pushyamitra Keshav Joshi.png",
      alt: "John Doe",
      description:
        "The Mukherjee Fellowship provided a unique opportunity to learn about politics and policy. Though coming from a STEM background, I was eager to gain insight into the world of politics and policy. The Fellowship’s unique model offered in-depth knowledge of policy and politics. The on-ground experience showed how politics works at the grassroots level.",
    },
    {
      name: "Vaishali Sukhija ",
      image: "/images/images2024/Vaishali Sukhija.png",
      alt: "John Doe",
      description:
        "I applied for this fellowship with the aim of gaining insight into the workings of the political and public policy realms. The theoretical phase provided ample learning opportunities, but the real exposure came when I was assigned to work directly under Union Minister of State for External Affairs and Culture, Mrs. Meenakshi Lekhi. Under her mentorship, I acquired hands-on experience in drafting policy documents, working with the communications team handling constituency work, and conducting extensive research across diverse subjects. This experience gave me a lot of practical insights and helped me broaden my spectrum of learning.",
    },
    {
      name: "Ashish Mishra",
      image: "/images/images2024/Ashish Mishra.png",
      alt: "Ashish Mishra",
      description:
        "I did my graduation in Political Science post which I worked in Development Sector for couple of years. My interest in political and policy work led me to the Mukherjee Fellowship, where I had the opportunity to work in Dr. Mansukh Mandaviya's office. Here, I gained hands-on experience in drafting political and policy-related documents and learned about government operations and legislative processes.",
    },
    {
      name: "Shivansh Nagpal",
      image: "/images/images2024/Shivansh Nagpal.png",
      alt: "Shivansh Nagpal",
      description:
        "As a recent graduate eager to pursue a long-term career in public policy—especially in technology, climate change, and governance—I have found the Mukherjee Fellowship to be a meticulous initiative. It has offered me numerous opportunities for hands-on learning and real-time political and policy research, making the experience truly enlightening.",
    },
    {
      name: "Shubham Rai",
      image: "/images/images2024/Shubham Rai.png",
      alt: "John Doe",
      description:
        "Becoming a Mukherjee Fellow has profoundly changed my life. I always dreamed of learning about policy and politics and applying this knowledge in the field. The fellowship allowed me to work in Chhattisgarh during the General Election, gaining firsthand experience in political campaigning. Before and after the election, I had the opportunity to work in a leader’s office, focusing on social media and media narratives, as well as policy matters. This role enhanced my understanding of communication strategies and policy development, equipping me with the skills to make a meaningful impact.",
    },
    {
      name: "Aryaman Pathak",
      image: "/images/images2024/Aryaman Pathak.png",

      alt: "Aryaman Pathak",
      description:
        "A major outlay of working as a political strategist with Shri Tarun Chugh Ji (National General Secretary, BJP) was learning the intricacies of the political landscape and understanding how power dynamics operate, while simultaneously unlearning much about the traditional workings of politics, this was one of the major benefits that the Mukherjee Fellowship provided me through its two robust dynamic modules.",
    },
    {
      name: "Ronak Pawar",
      image: "/images/images2024/Ronak Kishorbhai Pawar.png",
      alt: "Ronak Pawar",
      description:
        "I am currently working with Shri C.R. Patil, the Gujarat BJP State President and Union Minister of Jal Shakti. My experience with the Mukherjee Fellowship and the PPGF was exceptional, The rigorous professional training we received in political consultancy, policy research & campaigns is unparalleled in the field. The opportunity to equip oneself with the skills and aptitude to work with national leaders and ministers is phenomenal, I will forever be grateful for their exceptional mentorship.",
    },
    {
      name: "Mehak Yadav",
      image: "/images/images2024/mehak yadav.png",
      alt: "Mehak Yadav",

      description:
        "The Mukherjee Fellowship offered exceptional training, leading to a seamless role in MP Shri Baijayant Jay Panda Ji's office, where my ideas were highly valued. Supervising a women’s outreach program in Kendrapara Lok Sabha uniquely enhanced my skills, providing an unparalleled opportunity for impactful development.",
    },

    {
      name: "Hardik Bhatnagar ",
      image: "/images/images2024/hardik bhatnagar.png",
      alt: "Hardik Bhatnagar ",

      description:
        "Being part Mukherjee Fellowship gave me an extraordinary opportunity to work in one of the highest offices in the country, I came in as a fresher just out of college in the Political-Policy world and after being deputed to my MP and Honorable cabinet minister's office i have been exposed to variety of fields from how elections are fought, got chances to write political speeches for HM and even do research in various fields for him. Mukherjee Fellowship gives you this opportunity to do undertake diversity of tasks and diversify your experience and learning ",
    },
    {
      name: "Omkar Arora",
      image: "/images/images2024/Omkar Arora.png",
      alt: "Omkar Arora",

      description:
        "The Mukherjee Fellowship was exceptional in terms of the quality of knowledge imparted across a wide range of sectors and the deputation at a Chief Minister’s office itself provided a strong foundation for me to build upon in the future. ",
    },
    {
      name: "Sakshi Kapoor",
      image: "/images/images2024/Sakshi Kapoor.png",
      alt: "SAKSHI KAPOOR",

      description:
        "My journey has been incredibly rewarding. Each day brought new opportunities to learn. Working at Minister’s Office, provided exclusive insights into polity and governance. Direct interaction with experts enriched my perspective on public affairs. Intense work hours have trained me for the commitment required in this field. The program enabled me to deliver results in ways I never thought possible. It has been a truly transformative experience shaping my career goals",
    },
    {
      name: "Shubham Kumar",
      image: "/images/images2024/Shubham Kumar.png",
      alt: "Shubham Kumar",

      description:
        "My name is Shubham Kumar, and I am a graduate of Jawaharlal Nehru University. Throughout my academic journey, I've been fascinated by the gap between policy formulation and its implementation—a space often influenced by politics. I deeply believe that meaningful societal change is impossible without the right political framework. To me, policy-driven politics is essential for progress.The Mukherjee Fellowship embodies the perfect blend of policy, governance, and politics. It offers unparalleled exposure to top political offices, providing a unique opportunity to understand the intricacies of policy creation, its practical application, and the political dynamics that shape it.",
    },
    {
      name: "Ravi Kumar Sogarwal",
      image: "/images/images2024/Ravi Kumar.png",
      alt: "RAVI KUMAR SOGARWAL",

      description:
        "I am immensely grateful for the opportunity provided by the Mukherjee Fellowship, which served as a gateway for me to delve into the intricacies of the political sphere firsthand. The in-office training equipped me with invaluable theoretical knowledge, proving instrumental when I was assigned to Dr. Sambit Patra's office. Working alongside him as a member of his research and communication team during the 2024 election campaign was a privilege that significantly enriched my understanding and skills.Under Dr. Patra's mentorship, each day brought new challenges and opportunities for growth, particularly through extensive fieldwork conducted during the Lok Sabha elections. I am certain that the lessons and expertise gained through the Mukherjee Fellowship will serve as a solid foundation for my future endeavours.",
    },
    {
      name: "Mukesh Bisane",
      image: "/images/images2024/Mukesh Bisane.png",
      alt: "Mukesh Ghanshyam Bisane",

      description:
        "With my R&D background and experience in the development sector, I have always been passionate about politics and policy. As a Mukherjee fellow, I had the opportunity to closely observe, learn, and execute various election strategies in the complex state of Bihar. This provided me with valuable insights into the real-world impact of government policies. During this time, I deepened my understanding of social engineering processes, the role of data in elections, and effective mass communication strategies. The fellowship has helped me grow and evolve as a person on multiple fronts.",
    },
    {
      name: "Mrunmayee Paralikar",
      image: "/images/images2024/Mrunmayee Mandar Paralikar.png",
      alt: "Mrunmayee Mandar Paralikar",

      description:
        "Namaste! With a background in Political Science and work experience in education sector, the fellowship allowed me to delve deeper into the policy landscape, working at the intersection of government, civil society, and academia. Working alongside the Hon. Commerce and Industry Minister provided invaluable exposure, especially during election. Experiencing elections from the other side enhanced my understanding of the electorate and the intricate workings of a democratic society. I honed a diverse set of skills including social media management, comprehensive evidence-based research, and impactful articulation. The most significant realization was discovering my passion for this field. I am excited to continue my learning and contributions in this space, driven by the insights and experiences gained during this transformative journey.",
    },
  ];
  const fellownew = [
    {
      name: "Anand Sinha",
      image: "/images/images2025/Anand Sinha.png",
      alt: "Anand ",
      description:
        "Joined this fellowship with high expectations, I’m thrilled that it has exceeded them. The training provided deep insights into policy-making and politics, from booth-level to national dynamics. That coupled with the deputation, where theory meets practice, make the experience immersive, enriching, and invaluable for a political consultant’s growth. ",
    },
    {
      name: " Rajwardhan Rana ",
      image: "/images/images2025/Rajwardhan Rana.png",
      alt: "Rajwardhan Rana",
      description:
        "I am Rajwardhan Rana, an alumnus of IIIT Surat. From legislative research to political intelligence gathering, the fellowship has been a masterclass in real-world governance. Engaging with policymakers and political leaders has sharpened my insights, bridging data-driven analysis with impactful decision-making.",
    },
    {
      name: "Anirudh Badoni ",
      image: "/images/images2025/Anirudh Badoni.png",
      alt: "Anirudh Badoni",
      description:
        "The Mukherjee Fellowship was a transformative experience, deepening my understanding of governance, policymaking, international relations, and economic and political dynamics. The rigorous training and diverse cohort offered invaluable insights, equipping me with the skills to navigate and contribute meaningfully to the policy landscape.",
    },
    {
      name: "Pallav Shrivastava ",
      image: "/images/images2025/Pallav Shrivastava.png",
      alt: "Pallav Shrivastava ",
      description:
        " My name is Pallav Shrivastava and my areas of interest is in development and labour economics, tech policy and energy policy. During the course of the fellowship, I got to work on Anti trust economics in AI and digital markets. In addition to this, I got to work on PR of Railway Ministry and make briefs for the honourable minister. It's been an intellectually stimulating experience so far. It is a great opportunity for young professional like us to work at the intersection of political and policy consulting.",
    },

    {
      name: "Rakshita Malviya ",
      image: "/images/images2025/Rakshita Malviya.png",
      alt: "Rakshita Malviya ",
      description:
        "From a young age, I had a firm belief that education, when not directed toward the greater good of society, becomes a wasted resource. This philosophy led me to explore the field of ever evolving policy making, shaped by the aspirations of people. Delving deeper, it became clear that the political landscape defines the contours of policymaking.The Mukherjee Fellowship, then, felt like a rite of passage. It offered hands-on experience at the intersection of policy and politics, aligning my philosophy with practical exposure.",
    },
    {
      name: "Harshwardhan ",
      image: "/images/images2025/Harshwardhan.png",
      alt: "Harshwardhan ",
      description:
        "The Mukherjee Fellowship’s tagline, “Create the Future,” deeply resonated with me, offering a chance to shape the future and impact lives. It gave me the opportunity to work on key national legislative issues, understand the intersection of governance, policy, and politics, and contribute at the grassroots level—ensuring policies truly serve those at the margins.",
    },
    {
      name: "Bharati Agarwal",
      image: "/images/images2025/Bharati Agarwal.png",
      alt: "John Doe",
      description:
        "The Fellowship equipped me with the tools to understand the nuances of politics and policy in a better manner. For me it has acted not just as a stepping stone, but also as a launch pad for my career through the first hand interactions with the government and its machinery. ",
    },
    {
      name: "Sumit Goswami",
      image: "/images/images2025/Sumit Goswami.png",
      alt: "Sumit Goswami",
      description:
        "As a policy researcher and political consultant, currently part of the Mukherjee Fellowship and working with the office of MoS Jal Shakti and Muzaffarpur MP Dr. Raj Bhushan Choudhary Ji, my experience spans across legislative research, policy analysis, constituency development, and political strategy, providing a versatile and diverse perspective on governance and politics.",
    },
    {
      name: "Manan Goel",
      image: "/images/images2025/Manan Goel.png",
      alt: "John Doe",
      description:
        "Being a Mukherjee Fellow has been a transformative journey, unlocking unparalleled avenues for growth. The fellowship’s training module provided deep insights into political consulting and policymaking. My experiential module—deputation to Union Cabinet Minister, Dr Mansukh Mandaviya’s office—has been an extraordinary springboard, offering invaluable learning, ample networking, and access to top policymakers.",
    },
    {
      name: "Pranjal Yadav",
      image: "/images/images2025/pranjal yadav.png",
      alt: "Pranjal Yadav",
      description:
        "Having a science background, the fellowship’s training has helped me understand India’s diverse political landscape. In the leader’s office, I work on drafting talking points and presenting insights on current issues. Each day brings new insights, helping me navigate the complexities of decision making and political strategy. ",
    },
    // Replicating the first 9 fellows to reach 21 total

    {
      name: "Vivek Raj",
      image: "/images/images2025/Vivek Raj.png",
      alt: "John Doe",
      description:
        "As a Mukherjee Fellow, I underwent three months of rigorous training in public policy, governance, and politics. Deputed to the office of a senior national leader, I gained hands-on experience in creating proposals, strategies for upcoming election projects and other political consulting related work. Grateful to the Mukherjee Fellowship team for this opportunity.",
    },
    {
      name: "Shantanu Misra",
      image: "/images/images2025/Shantanu Misra.png",
      alt: "John Doe",
      description:
        " I am Shantanu Misra as a Mukherjee Fellow I have gained hands-on experience in political consulting and policy-making, directly assisting an Hon’ble MP. My work includes drafting parliamentary questions, press conference talking points, and committee reports, contributing to legislative processes and strategic political communication.",
    },
    {
      name: "Disha Chauhan ",
      image: "/images/images2025/Disha Chauhan.png",
      alt: "Disha Chauhan ",
      description:
        "As a psychology post-graduate, stepping into policymaking through the Mukherjee Fellowship was immersive—complex, unpredictable, and deeply human. Working in a ministry’s office, I learned that policy drafting goes beyond frameworks; it’s about navigating chaos and understanding people’s realities. This experience strengthened my understanding of governance that is empathetic, inclusive, and effective. ",
    },
    {
      name: "Sarthak Sharma ",
      image: "/images/images2025/Sarthak Sharma.png",
      alt: "John Doe",
      description:
        " The fellowship helped me gain knowledge about the political functioning of parties and how it operates within this nation. I have deeply delved into public policy and its fundamental elements. It has been an amazing journey.",
    },
    {
      name: "Sahil Jindal",
      image: "/images/images2025/Sahil Jindal.png",
      alt: "Sahil Jindal",
      description:
        " After preparing for UPSC, this fellowship has been a switch to the policy/politics space for me. During the training phase, I've learnt skills, which will help me navigate my path ahead.",
    },

    {
      name: "Janya Vyas ",
      image: "/images/images2025/Vyas Kunjan.png",
      alt: "Janya Vyas",
      description:
        "I am an urban planner with a keen interest in public policy. The Mukherjee Fellowship was an enriching experience. During the fellowship, I had the opportunity to research the topic of Empowerment of Urban Local Bodies, exploring the intersection of policy, governance, and urban planning. Working alongside an MP was an invaluable experience that provided me with deep insights into legislative processes and effective policymaking.",
    },
    {
      name: "Vishnudath S",
      image: "/images/images2025/Vishnudath S_.png",
      alt: "Vishnudath S",
      description:
        "Vishnu is a public policy professional with a background in International Studies and Economics. He has experience working with think tanks and research institutions, focusing on Domestic Politics, Geopolitical Challenges and Economic Policy. ",
    },
    {
      name: "Dazy Sabharwal",
      image: "/images/images2025/Dazy Sabharwal.png",
      alt: "Dazy Sabharwal",
      description:
        "My name is Dazy, and I hold a Master’s in Political Science. As a Mukherjee Fellow, I have developed a broad expertise across Economics, Politics, History, and global affairs, becoming a well-rounded generalist. This holistic knowledge enables one to provide insightful policy consulting to MPs and Ministers, while continuous upskilling prepares us for the biggest opportunities ahead.",
    },
    {
      name: "Vaishnavi Gaur",
      image: "/images/images2025/Vaishnavi Gaur.png",
      alt: "Vaishnavi Gaur",

      description:
        "Hi, I'm Vaishnavi Gaur, a lawyer with a passion for politics and governance. As a Mukherjee Fellow, I worked with the Commerce Ministry, gaining insights into governance, shaping my understanding of public policy and equipping me with skills to contribute meaningfully.",
    },
    {
      name: "Abhijeet Singh Kushwah",
      image: "/images/images2025/abhijeet singh kushwaha.png",
      alt: "Abhijeet Singh Kushwah",
      description:
        "I am Abhijeet, a former UPSC aspirant. Through the Mukherjee Fellowship, I channelled my rigour into policymaking, analysing CAG reports to derive insights on fiscal governance and accountability. My work advises stakeholders on data-driven reforms, transforming audits into equitable policy outcomes.",
    },
    {
      name: "Nipun Kumar Srivastava",
      image: "/images/images2025/Nipun Kumar Srivastava.png",
      alt: "John Doe",
      description:
        "I am Nipun Kumar Srivastava, an advocate by profession. PPGF has given me great opportunity to work with the top beaurucrat and government organisations in India. I had got an opportunity to visit the ground during local body election and deliver political consulting to the leader. I was also the part of the various policy making and budget making of 2025-26.",
    },
    {
      name: "Navamohana Krishnan S",
      image: "/images/images2025/Navamohana Krishnan S.png",
      alt: "John Doe",
      description:
        "As a public policy enthusiast, the Mukherjee Fellowship helps me understand the nuances associated with decision-making at the highest level. While working at the leader's office, I'm able to bridge the gap between theory and practice, learning about the complexities and challenges, and contribute to real-time solutions on the ground. ",
    },
    {
      name: "Jithesh Krishnan Ramesh",
      image: "/images/images2025/Jithesh Krishnan Ramesh.png",
      alt: "Jithesh Krishnan Ramesh",
      description:
        "I am a law graduate with a deep interest in policy, governance, and legal frameworks, which led me to the Mukherjee Fellowship. Through the Fellowship, I was deputed to the office of a senior Union Minister where I contributed to policymaking, focusing on research, strategy, stakeholder engagement and governance initiatives.",
    },
  ];

  const openNewModal = (index: number) => {
    setNewIndex(index);
    setIsNewOpen(true);
  };

  const openOldModal = (index: number) => {
    setOldIndex(index);
    setIsOldOpen(true);
  };

  const sortedFellows_old = fellowsold.sort((a, b) =>
    a.name.trim().localeCompare(b.name.trim()),
  );
  const sortedFellows_new = fellownew.sort((a, b) =>
    a.name.trim().localeCompare(b.name.trim()),
  );
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 text-center xl:px-0">
      <motion.h2
        className="font-EB-extrabold mt-6 text-2xl text-gray-900 sm:mt-8 sm:text-6xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Meet Our Fellows
      </motion.h2>
      <motion.p
        className="font-helvetica-regular mt-[7px] block text-xs leading-3 text-[#1E1E1E] sm:hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Hear from our past and present Fellows sharing their Mukherjee
        Fellowship experience in their own words.
      </motion.p>
      <motion.p
        className="font-helvetica-regular mx-auto mt-4 hidden max-w-7xl text-2xl text-gray-700 sm:block"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Hear from our past and present Fellows sharing their Mukherjee
        Fellowship <br />
        experience in their own words.
      </motion.p>

      {/* 2024-2025 Fellows */}
      <span className="font-EB-extrabold mb-6 mt-12 block text-xl text-gray-700 sm:mt-14 sm:text-4xl">
        2024 - 2025
      </span>

      <motion.div
        className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {sortedFellows_new.map((fellow, index) => (
          <motion.div
            key={index}
            onClick={() => openNewModal(index)}
            className="flex cursor-pointer flex-col items-center"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative h-40 w-40 sm:h-48 sm:w-48">
              <Image
                src={fellow.image}
                alt={fellow.name}
                fill
                className="rounded-lg object-cover shadow-md"
              />
            </div>
            <p className="mt-3 max-w-[14rem] truncate text-center text-sm font-semibold text-gray-800 sm:text-base">
              {fellow.name}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* 2023-2024 Fellows */}
      <span className="font-EB-extrabold mb-6 mt-16 block text-xl text-gray-700 sm:text-4xl">
        2023 - 2024
      </span>
      <motion.div
        className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {sortedFellows_old.map((fellow, index) => (
          <motion.div
            key={index}
            onClick={() => openOldModal(index)}
            className="flex cursor-pointer flex-col items-center"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative h-40 w-40 sm:h-48 sm:w-48">
              <Image
                src={fellow.image}
                alt={fellow.name}
                fill
                className="rounded-lg object-cover shadow-md"
              />
            </div>
            <p className="mt-3 max-w-[13rem] truncate text-center text-sm font-semibold text-gray-800 sm:text-base">
              {fellow.name}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Dialogs remain largely the same, with minor adjustments */}
      <Dialog
        open={isNewOpen}
        onClose={() => setIsNewOpen(false)}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 px-4"
      >
        <motion.div
          className="relative mx-auto flex max-h-[90vh] max-w-5xl flex-col items-center gap-6 overflow-y-auto rounded-lg bg-white p-8 md:flex-row"
          initial={{ x: "-30%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <button
            className="absolute right-2 top-2 rounded-full bg-white p-2"
            onClick={() => setIsNewOpen(false)}
          >
            <XMarkIcon className="h-5 w-5 text-black" />
          </button>
          <div className="relative h-64 w-64 flex-shrink-0">
            <Image
              src={fellownew[newIndex].image}
              alt={fellownew[newIndex].alt}
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex-1">
            <motion.div className="font-EB-extrabold text-left text-2xl text-gray-900">
              {fellownew[newIndex].name}
            </motion.div>
            <motion.div className="font-helvetica-regular mt-4 text-left text-lg text-gray-900">
              {fellownew[newIndex].description}
            </motion.div>
          </div>
        </motion.div>
      </Dialog>

      <Dialog
        open={isOldOpen}
        onClose={() => setIsOldOpen(false)}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 px-4"
      >
        <motion.div
          className="relative mx-auto flex max-h-[90vh] max-w-5xl flex-col items-center gap-6 overflow-y-auto rounded-lg bg-white p-8 md:flex-row"
          initial={{ x: "-30%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <button
            className="absolute right-2 top-2 rounded-full bg-white p-2"
            onClick={() => setIsOldOpen(false)}
          >
            <XMarkIcon className="h-5 w-5 text-black" />
          </button>
          <div className="relative h-64 w-64 flex-shrink-0">
            <Image
              src={fellowsold[oldIndex].image}
              alt={fellowsold[oldIndex].alt}
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex-1">
            <motion.div className="font-EB-extrabold text-left text-2xl text-gray-900">
              {fellowsold[oldIndex].name}
            </motion.div>
            <motion.div className="font-helvetica-regular mt-4 text-left text-lg text-gray-900">
              {fellowsold[oldIndex].description}
            </motion.div>
          </div>
        </motion.div>
      </Dialog>
    </section>
  );
}

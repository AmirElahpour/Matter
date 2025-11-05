import { easeInOut, motion, type Variants } from "motion/react";
import Mobiles from "../assets/Div [Lead_phones__MLRyC].png";
import Section1 from "../assets/Div [FeatureCard_animationContainer__OX5nu].png";
import Section2 from "../assets/Div [FeatureCard_animationContainer__OX5nu] (1).png";
import {
  Bookmark,
  ArrowRight,
  Zap,
  CirclePlus,
  AudioLines,
  Pen,
  Layers,
  CloudOff,
  Tag,
  Sparkles,
  GalleryVerticalEnd,
} from "lucide-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

// Add Comment/User type above the Home component
interface User {
  id: number;
  username?: string;
  fullName?: string;
}
interface Comment {
  id: number;
  body: string;
  postId: number;
  user: User;
}

interface Cat {
  url: string;
}

const Home = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [cats, setCats] = useState<Cat[]>([]);

  useEffect(() => {
    setLoading(true);

    const fetchComments = axios.get("https://dummyjson.com/comments");
    const fetchCats = axios.get(
      "https://api.thecatapi.com/v1/images/search?limit=30",
      {
        headers: {
          "x-api-key":
            "live_ympL1tkP0d2umV8nu5SrRe3lVerOhez4GFuKb2hVq0PevOiQjqDtNrSwPiTrmH2y",
        },
      }
    );

    Promise.all([fetchComments, fetchCats])
      .then(([commentsRes, catsRes]) => {
        setComments(commentsRes.data.comments);
        setCats(catsRes.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load data");
        setLoading(false);
      });
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { stiffness: 100, damping: 20 },
    },
  };

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.07,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 90, damping: 12 },
    },
  };

  const item2: Variants = {
    hidden: { opacity: 0, x: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 90, damping: 12 },
    },
  };

  const footer = ["Terms", "Privacy", "Twitter", "Say hello"];

  return (
    <div className="overflow-hidden">
      <section className="pt-16 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: easeInOut }}
        >
          {/* small notification */}
          <motion.div className="inline-flex items-center gap-3 bg-[#202020] px-3 md:px-5 py-2 rounded-full my-8 sm:my-10 md:my-15 cursor-pointer">
            <span className="text-purplee text-xs  font-bold">NEW</span>
            <span className="text-white text-sm">✨ Readable Products</span>
          </motion.div>
          {/* Hero section */}
          <div className="flex justify-center items-center flex-col gap-5 sm:gap-10 px-5 max-w-3xl mx-auto">
            <h1 className="dark:text-white font-bold text-5xl md:text-7xl sm:text-6xl max-w-lg">
              Finally, a better reader
            </h1>
            <p className="text-text text-sm sm:text-xl">
              Matter pulls everything you want to read into one beautiful place.
              With powerful tools, curation, seamless audio and more, we're
              building a reader for today's internet.
            </p>
            <img src={Mobiles} alt="" className="mt-10 md:mt-15" />
          </div>
        </motion.div>
        {/* content section */}
        <section className="max-w-5xl mx-auto">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col max-w-2xl mx-auto text-start gap-5 sm:gap-10 px-10 sm:px-5 my-50"
          >
            <h1 className=" w-3/4 dark:text-white font-bold text-4xl sm:text-5xl md:text-6xl">
              One place for all your reading
            </h1>
            <p className="text-text text-base sm:text-lg">
              Better read-it-later is just the start. Follow your favorite
              writers, save Twitter threads, and get control of that newsletter
              situation. With Matter, you’ll never miss out on a great read
              again.
            </p>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 w-30 rounded-full bg-purplee text-white border-2 border-purplee text-xs sm:text-sm cursor-pointer hover:bg-white hover:dark:bg-darkBG hover:text-black hover:dark:text-white transition-all duration-300"
            >
              Get Matter
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col lg:flex-row gap-10 lg:gap-0 px-5 justify-center items-center lg:justify-between my-20 lg:my-50"
          >
            <div className="flex flex-col gap-8 max-w-sm lg:max-w-xs justify-center">
              <Bookmark className="stroke-purplee w-10 h-10" />
              <h1 className="dark:text-white text-4xl font-bold text-start">
                Save anything for later.
              </h1>
              <p className="text-text text-start">
                Save articles, threads, and PDFs. Behind the scenes, we’re
                developing the most advanced parsing technology so you can read
                without distraction.
              </p>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", ease: easeInOut, duration: 0.3 }}
                href="#"
                className="flex text-purplee gap-2 font-bold text-sm"
              >
                Get the browser extension
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>

            <img src={Section1} className="max-w-[540px] h-auto w-full" />
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-0 px-5 justify-center items-center lg:justify-between my-20 lg:my-50"
          >
            <div className="flex flex-col gap-8 max-w-sm lg:max-w-xs justify-center">
              <Zap className="stroke-purplee w-10 h-10" />
              <h1 className="dark:text-white text-4xl font-bold text-start">
                Get newsletters out of your inbox.
              </h1>
              <p className="text-text text-start">
                We love newsletters. Emails, not so much. Get all your
                subscriptions – free and paid – delivered straight to Matter.
                Connect Gmail or use your unique Matter email address.
              </p>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", ease: easeInOut, duration: 0.3 }}
                href="#"
                className="flex text-purplee gap-2 font-bold text-sm"
              >
                Learn how
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>

            <img src={Section2} className="max-w-[540px] h-auto w-full" />
          </motion.div>

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col lg:flex-row gap-10 lg:gap-0 px-5 justify-center items-center lg:justify-between my-20 lg:my-50"
          >
            <div className="flex flex-col gap-8 max-w-sm lg:max-w-xs justify-center">
              <CirclePlus className="stroke-purplee w-10 h-10" />
              <h1 className="dark:text-white text-4xl font-bold text-start">
                Follow writers, not feeds.
              </h1>
              <p className="text-text text-start">
                Keep up with the latest from your favorite voices. Wherever they
                publish.
              </p>
            </div>

            <img
              src="/Div [Video_container__8MQGm].png"
              className="max-w-[540px] h-auto w-full"
            />
          </motion.div>
        </section>
      </section>
      <section>
        {loading && (
          <motion.div className="hidden md:flex w-full mb-30">
            <motion.div className="md:columns-4 lg:columns-6 gap-2 mx-auto">
              {Array.from({ length: 30 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="rounded-xl mb-3 flex justify-between flex-col gap-4 text-white bg-[#1E1F22] p-5 font-inter break-inside-avoid"
                >
                  <div className="flex items-center gap-2">
                    <Skeleton className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <Skeleton className="w-[150px] h-4 mb-2" />
                      <Skeleton className="w-[150px] h-4" />
                    </div>
                  </div>
                  <Skeleton className="w-[150px] h-10" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}

        {!loading && !error && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={container}
            viewport={{ once: true, amount: 0.1 }}
            className="hidden md:flex w-full mb-30"
          >
            <motion.div className="md:columns-4 lg:columns-6 gap-2">
              {comments.map((comment, i) => (
                <motion.div
                  key={comment.id}
                  variants={item}
                  className="rounded-xl mb-3 flex justify-between flex-col gap-4 text-white bg-[#E9EAEE] dark:bg-[#1E1F22] p-5 font-inter break-inside-avoid shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    {cats[i] && (
                      <img
                        src={cats[i].url}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    )}
                    <div>
                      <h1 className="dark:text-slate-50 text-black font-bold text-sm">
                        {comment.user?.fullName || "Unknown User"}
                      </h1>
                      <p className="text-xs text-text">
                        @{comment.user?.username}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm dark:text-white text-black">
                    {comment.body || "[No body]"}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </section>

      <motion.section className="bg-darkLight dark:bg-lightDark py-5">
        <motion.div
          initial={{ translateY: 100, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ type: "spring", damping: 10, duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col max-w-2xl mx-auto text-start gap-5 sm:gap-10 px-10 sm:px-5 my-30"
          >
            <h1 className=" w-3/4 dark:text-white font-bold text-4xl sm:text-5xl md:text-6xl">
              Read with superpowers.
            </h1>
            <p className="text-text text-base sm:text-lg">
              We’re building the best reading experience, ever. With advanced
              speech synthesis, smooth highlighting, quoteshots, and more,
              Matter lets you do more with what you read.
            </p>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 w-30 rounded-full bg-purplee hover:bg-darkLight hover:dark:bg-lightDark text-white hover:text-black hover:dark:text-white border-2 border-purplee text-xs sm:text-sm cursor-pointer transition-all duration-300"
            >
              Get Matter
            </motion.button>
          </motion.div>

          <div className="flex flex-col md:flex-row lg:flex-col justify-around gap-20">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 0.8,
              }}
              viewport={{ once: true, amount: 0.1 }}
              className="flex flex-col lg:flex-row gap-30 px-5 max-w-[850px] mx-auto justify-center items-center lg:justify-between "
            >
              <div className="flex flex-col gap-8 max-w-[315px] lg:max-w-xs justify-center">
                <AudioLines className="stroke-purplee w-10 h-10" />
                <h1 className="dark:text-white text-4xl font-bold text-start">
                  Switch between audio and text. Seamlessly.
                </h1>
                <p className="text-text text-start">
                  Turn your newsletters, blogs, and articles into a playlist
                  with a voice so human it’s hard to distinguish from, well, a
                  human.
                </p>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{
                    type: "spring",
                    ease: easeInOut,
                    duration: 0.3,
                  }}
                  href="#"
                  className="flex text-purplee gap-2 font-bold text-sm"
                >
                  Listen now
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </div>

              <img
                src="/Div [Video_container__8MQGm] (1).png"
                className="hidden lg:flex max-w-[315px] h-auto w-full "
              />
            </motion.div>

            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 0.8,
              }}
              viewport={{ once: true, amount: 0.1 }}
              className="flex flex-col lg:flex-row gap-30 px-5 max-w-[850px] mx-auto justify-center items-center lg:justify-between "
            >
              <div className="flex flex-col gap-8 max-w-[315px] lg:max-w-xs justify-center">
                <Pen className="stroke-purplee w-10 h-10" />
                <h1 className="dark:text-white text-4xl font-bold text-start">
                  Capture knowledge as you go.
                </h1>
                <p className="text-text text-start">
                  Highlight without friction. No more multi-step highlighting
                  flows that take you out of reading flow. Simply long press and
                  drag your finger. Or use the pencil on iPad.
                </p>
              </div>

              <img
                src="/Video [Superpowers_video__KwdI8].png"
                className="hidden lg:flex max-w-[315px] h-auto w-full "
              />
            </motion.div>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-2 my-30 px-5"
          >
            <motion.div
              variants={item2}
              className="flex flex-col justify-center items-center bg-white dark:bg-darkBG rounded-2xl h-[234px] gap-5 shadow-lg"
            >
              <GalleryVerticalEnd className="stroke-purplee w-8 h-8" />
              <h1 className="dark:text-white text-xl md:text-3xl font-bold">
                Power Queuing
              </h1>
              <p className="text-text text-sm sm:text-base md:text-lg text-center">
                Reorder, triage, filter, shuffle.
              </p>
            </motion.div>

            <motion.div
              variants={item2}
              className="flex flex-col justify-center items-center bg-white dark:bg-darkBG rounded-2xl h-[234px] gap-5 shadow-lg px-8 text-center"
            >
              <CloudOff className="stroke-purplee w-8 h-8" />
              <h1 className="dark:text-white text-xl md:text-3xl font-bold">
                Offline Search
              </h1>
              <p className="text-text text-sm sm:text-base md:text-lg">
                Search full text and within articles, even when offline.
              </p>
            </motion.div>

            <motion.div
              variants={item2}
              className="flex flex-col justify-center items-center bg-white dark:bg-darkBG rounded-2xl h-[234px] gap-5 shadow-lg px-8 text-center"
            >
              <Tag className="stroke-purplee w-8 h-8" />
              <h1 className="dark:text-white text-xl md:text-3xl font-bold">
                Tagging
              </h1>
              <p className="text-text text-sm sm:text-base md:text-lg">
                Organize your library for quick recall.
              </p>
            </motion.div>

            <motion.div
              variants={item2}
              className="flex flex-col justify-center items-center bg-white dark:bg-darkBG rounded-2xl h-[234px] gap-5 shadow-lg px-8 text-center"
            >
              <Layers className="stroke-purplee w-8 h-8" />
              <h1 className="dark:text-white text-xl md:text-3xl font-bold">
                Integrations
              </h1>
              <p className="text-text text-sm sm:text-base md:text-lg">
                Connect writers from Twitter and Gmail. Sync highlights to your
                second brain.
              </p>
            </motion.div>

            <motion.div
              variants={item2}
              className="flex flex-col justify-center items-center bg-white dark:bg-darkBG rounded-2xl h-[234px] gap-5 shadow-lg px-8 text-center"
            >
              <AudioLines className="stroke-purplee w-8 h-8" />
              <h1 className="dark:text-white text-xl md:text-3xl font-bold">
                Audio Highlights
              </h1>
              <p className="text-text text-sm sm:text-base md:text-lg">
                Highlight while you listen without looking at the screen.
              </p>
            </motion.div>

            <motion.div
              variants={item2}
              className="flex flex-col justify-center items-center bg-white dark:bg-darkBG rounded-2xl h-[234px] gap-5 shadow-lg px-8 text-center"
            >
              <Sparkles className="stroke-purplee w-8 h-8" />
              <h1 className="dark:text-white text-xl md:text-3xl font-bold">
                Quoteshots
              </h1>
              <p className="text-text text-sm sm:text-base md:text-lg">
                Share beautiful quoteshotes, optimized for Twitter.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
      <motion.footer
        initial={{ translateY: 40, opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 10 }}
        viewport={{ once: true, amount: 0.8 }}
        className="flex flex-col justify-center items-center dark:bg-darkBG bg-white"
      >
        <div className="flex flex-col justify-center items-center min-h-screen px-5 pt-10">
          <h1 className="text-5xl sm:text-6xl font-bold dark:text-white mb-5 text-center ">
            Words are my matter.
          </h1>
          <p className="text-3xl sm:text-4xl dark:text-white mb-10">
            –Ursula K. LeGuin
          </p>
          <button className="px-5 py-2 w-30 rounded-full bg-purplee hover:bg-white hover:dark:bg-darkBG text-white hover:text-black hover:dark:text-white border-2 border-purplee text-xs sm:text-sm cursor-pointer transition-all duration-300">
            Get Matter
          </button>
        </div>
        <div className="flex gap-4 sm:gap-8 text-text end-1 pb-10 ">
          {footer.map((link, i) => (
            <a
              key={i}
              href="#"
              className="hover:text-text/80 hover:dark:text-white transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>
      </motion.footer>
    </div>
  );
};

export default Home;

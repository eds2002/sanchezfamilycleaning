import {
  AnimationControls,
  AnimationProps,
  motion,
  TargetAndTransition,
  Transition,
  VariantLabels,
} from "framer-motion";
import Link from "next/link";
import React from "react";
import { VscLoading } from "react-icons/vsc";

type themes =
  | "primary"
  | "secondary"
  | "tertiary"
  | "translucent"
  | "outline"
  | "none";

interface Props {
  text?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  theme: themes;
  fullWidth?: boolean;
  ariaLabel?: string;
  className?: string;
  href?: string;
  initial?: any;
  animate?: boolean | VariantLabels | AnimationControls | TargetAndTransition;
  transition?: Transition;
  isLoading?: boolean;
}

const Button: React.FC<Props> = ({
  text,
  onClick,
  children,
  theme,
  fullWidth,
  ariaLabel,
  className,
  href,
  initial,
  animate,
  transition,
  isLoading = false,
}) => {
  return (
    <>
      {animate ? (
        <>
          {href ? (
            <motion.div
              transition={transition}
              initial={initial}
              animate={animate}
              className="flex"
            >
              <Link
                href={href}
                aria-label={ariaLabel}
                className={`
              ${className}
              ${
                theme === "primary" &&
                "bg-slate-900 rounded-full text-white px-4 py-2 hover:bg-slate-700 ease-in-out duration-200"
              }
              ${
                theme === "secondary" &&
                "bg-cyan-400 rounded-full px-4 py-2 hover:bg-cyan-500 ease-in-out duration-200 text-black"
              }
              ${
                theme === "tertiary" &&
                "bg-indigo-600 rounded-full px-4 py-2 hover:bg-indigo-500 ease-in-out duration-200 text-white"
              }
              ${
                theme === "translucent" &&
                "bg-slate-900 backdrop-blur-sm rounded-full px-4 py-1 hover:bg-neutral-400/70 ease-in-out duration-200 text-white"
              }
              ${
                theme === "outline" &&
                "bg-transparent border border-slate-200 rounded-full text-black px-4 py-2 hover:border-slate-500 ease-in-out duration-200"
              }
              ${fullWidth ? "w-full" : "w-max"}
              rounded-full relative overflow-hidden group 
            `}
              >
                {children}
              </Link>
            </motion.div>
          ) : (
            <motion.button
              onClick={onClick}
              aria-label={ariaLabel}
              initial={initial}
              animate={animate}
              className={`
              ${className}
              ${
                theme === "primary" &&
                "bg-slate-900 rounded-full text-white px-4 py-2 hover:bg-slate-700 ease-in-out duration-200"
              }
              ${
                theme === "secondary" &&
                "bg-cyan-400 rounded-full px-4 py-2 hover:bg-cyan-500 ease-in-out duration-200 text-black"
              }
              ${
                theme === "tertiary" &&
                "bg-indigo-600 rounded-full px-4 py-2 hover:bg-indigo-500 ease-in-out duration-200 text-white"
              }
              ${
                theme === "translucent" &&
                "bg-slate-900 backdrop-blur-sm rounded-full px-4 py-1 hover:bg-neutral-400/70 ease-in-out duration-200 text-white"
              }
              ${
                theme === "outline" &&
                "bg-transparent border border-slate-200 rounded-full text-black px-4 py-2 hover:border-slate-500 ease-in-out duration-200"
              }
              ${fullWidth ? "w-full" : "w-max"}
              rounded-full relative overflow-hidden group 
              `}
            >
              {children}
            </motion.button>
          )}
        </>
      ) : (
        <>
          {href ? (
            <Link
              href={href}
              aria-label={ariaLabel}
              className={`
          ${className}
          ${
            theme === "primary" &&
            "bg-slate-900 rounded-full text-white px-4 py-2 hover:bg-slate-700 ease-in-out duration-200"
          }
          ${
            theme === "secondary" &&
            "bg-cyan-400 rounded-full px-4 py-2 hover:bg-cyan-500 ease-in-out duration-200 text-black"
          }
          ${
            theme === "tertiary" &&
            "bg-indigo-600 rounded-full px-4 py-2 hover:bg-indigo-500 ease-in-out duration-200 text-white"
          }
          ${
            theme === "translucent" &&
            "bg-slate-900 backdrop-blur-sm rounded-full px-4 py-1 hover:bg-neutral-400/70 ease-in-out duration-200 text-white"
          }
          ${
            theme === "outline" &&
            "bg-transparent border border-slate-200 rounded-full text-black px-4 py-2 hover:border-slate-500 ease-in-out duration-200"
          }
          ${fullWidth ? "w-full" : "w-max"}
          rounded-full relative overflow-hidden group 
        `}
            >
              {children}
            </Link>
          ) : (
            <button
              onClick={onClick}
              aria-label={ariaLabel}
              className={`
              ${className}
              ${
                theme === "primary" &&
                "bg-slate-900 rounded-full text-white px-4 py-2 hover:bg-slate-700 ease-in-out duration-200"
              }
              ${
                theme === "secondary" &&
                "bg-cyan-400 rounded-full px-4 py-2 hover:bg-cyan-500 ease-in-out duration-200 text-black"
              }
              ${
                theme === "tertiary" &&
                "bg-indigo-600 rounded-full px-4 py-2 hover:bg-indigo-500 ease-in-out duration-200 text-white"
              }
              ${
                theme === "translucent" &&
                "bg-slate-900 backdrop-blur-sm rounded-full px-4 py-1 hover:bg-neutral-400/70 ease-in-out duration-200 text-white"
              }
              ${
                theme === "outline" &&
                "bg-transparent border border-slate-200 rounded-full text-black px-4 py-2 hover:border-slate-500 ease-in-out duration-200 "
              }
              ${fullWidth ? "w-full" : "w-max"}
              rounded-full relative overflow-hidden group transition-all
            `}
            >
              {isLoading ? (
                <>
                  <VscLoading className={"animate-spin text-xl"} />
                </>
              ) : (
                <>{children}</>
              )}
            </button>
          )}
        </>
      )}
    </>
  );
};

export default Button;

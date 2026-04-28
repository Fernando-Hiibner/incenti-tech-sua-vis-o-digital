import {
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/utils";

type RevealProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

const Reveal = <T extends ElementType = "div">({
  as,
  children,
  className,
  delay = 0,
  threshold = 0.2,
  style,
  ...props
}: RevealProps<T>) => {
  const Component = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element || typeof window === "undefined") {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Component
      ref={ref}
      className={cn("reveal-on-scroll", isVisible && "is-visible", className)}
      style={{
        ...style,
        ["--reveal-delay" as string]: `${delay}ms`,
      }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Reveal;

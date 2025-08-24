import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface SearchResultItemProps {
  result: {
    title: string;
    description: string;
    url: string;
    category: string;
    page: string;
  };
  index: number;
  onResultClick: (url: string) => void;
}

export const SearchResultItem: React.FC<SearchResultItemProps> = ({
  result,
  index,
  onResultClick,
}) => {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <Link
        href={result.url}
        onClick={(e) => {
          e.preventDefault();
          onResultClick(result.url);
        }}
        className="block p-4 border border-foreground/10 hover:border-foreground/30 transition-all duration-200 group"
      >
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h3 className="text-lg font-medium mb-2 group-hover:text-foreground transition-colors">
              {result.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-2">
              {result.description}
            </p>
            <span className="text-xs text-foreground/60 uppercase tracking-wide">
              {result.category} • {result.page}
            </span>
          </div>
          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
        </div>
      </Link>
    </motion.div>
  );
};

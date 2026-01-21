import { GraduationCap } from "lucide-react";

const Header = () => {
  return (
    <header className="gradient-header py-10 px-6 text-center">
      <div className="flex items-center justify-center gap-3 mb-3">
        <GraduationCap className="w-10 h-10 text-primary-foreground" />
        <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground">
          AI 튜터 시스템 개발 가이드
        </h1>
      </div>
      <p className="text-primary-foreground/90 text-lg">
        초등학교 3학년 국어 과목 - RAG+LLM vs LLM 비교
      </p>
    </header>
  );
};

export default Header;

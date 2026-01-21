import { FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ProjectOverview = () => {
  return (
    <section className="mb-10 animate-fade-in">
      <div className="flex items-center gap-2 mb-6">
        <FileText className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-semibold text-primary">프로젝트 개요</h2>
      </div>

      <div className="space-y-4">
        <Card className="card-shadow border-accent-left hover:card-shadow-hover transition-shadow duration-300">
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold text-primary mb-2">목표</h3>
            <p className="text-foreground/80">
              초중고 각 학년별/과목별 스마트 교육을 위한 AI 튜터 시스템 개발
            </p>
          </CardContent>
        </Card>

        <Card className="card-shadow border-accent-left hover:card-shadow-hover transition-shadow duration-300">
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold text-primary mb-2">
              1차 미션 (초등 3학년 국어)
            </h3>
            <ul className="space-y-2 text-foreground/80">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                초등 3학년 국어 과목에 대한 수업 설계 및 교안 생성
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                RAG+LLM과 LLM만 사용하는 경우의 결과 비교
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                교육부 2022년 교육과정 고시 문서를 RAG 데이터셋으로 활용
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProjectOverview;

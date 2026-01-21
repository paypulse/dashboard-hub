import { ArrowRight, RefreshCw } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ragSteps = [
  { step: 1, title: "데이터 수집", description: "교육부 2022년 교육과정 고시 문서 다운로드" },
  { step: 2, title: "문서 전처리", description: "PDF/DOC 파싱 → 텍스트 추출" },
  { step: 3, title: "청킹", description: "문서를 의미 단위로 분할 (500-1000 토큰)" },
  { step: 4, title: "임베딩 생성", description: "각 청크를 벡터로 변환" },
  { step: 5, title: "벡터 DB 저장", description: "Pinecone, Chroma, FAISS 등에 저장" },
  { step: 6, title: "사용자 질의", description: '"수업 교안을 만들어줘"' },
  { step: 7, title: "유사도 검색", description: "벡터 DB에서 관련 문서 검색" },
  { step: 8, title: "컨텍스트 구성", description: "검색 문서 + 질의를 프롬프트로 구성" },
  { step: 9, title: "LLM 생성", description: "GPT-4, Claude 등으로 교안 생성" },
  { step: 10, title: "결과 반환", description: "교육과정 기반의 정확한 교안 제공" },
];

const llmSteps = [
  { step: 1, title: "사용자 질의", description: '"수업 교안을 만들어줘"' },
  { step: 2, title: "LLM 직접 생성", description: "사전 학습 지식만으로 교안 생성" },
  { step: 3, title: "결과 반환", description: "일반적인 교안 제공 (정합성 낮음)" },
];

const FlowStep = ({ step, title, description, isLast }: { 
  step: number; 
  title: string; 
  description: string;
  isLast: boolean;
}) => (
  <div className="flex items-center gap-3">
    <div className="flex flex-col items-center">
      <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-semibold text-sm">
        {step}
      </div>
      {!isLast && <div className="w-0.5 h-6 bg-primary/30 mt-1" />}
    </div>
    <div className="flex-1 pb-4">
      <h4 className="font-medium text-foreground">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </div>
);

const ArchitectureFlow = () => {
  return (
    <section className="mb-10">
      <div className="flex items-center gap-2 mb-6">
        <RefreshCw className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-semibold text-primary">시스템 아키텍처 플로우</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* RAG + LLM */}
        <Card className="card-shadow hover:card-shadow-hover transition-shadow duration-300">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg text-primary flex items-center gap-2">
              <span className="px-3 py-1 rounded-full gradient-primary text-primary-foreground text-sm">
                방법 1
              </span>
              RAG + LLM 방식
            </CardTitle>
          </CardHeader>
          <CardContent className="max-h-96 overflow-y-auto">
            {ragSteps.map((item, index) => (
              <FlowStep
                key={item.step}
                step={item.step}
                title={item.title}
                description={item.description}
                isLast={index === ragSteps.length - 1}
              />
            ))}
          </CardContent>
        </Card>

        {/* LLM Only */}
        <Card className="card-shadow hover:card-shadow-hover transition-shadow duration-300">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg text-primary flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">
                방법 2
              </span>
              LLM 단독 방식
            </CardTitle>
          </CardHeader>
          <CardContent>
            {llmSteps.map((item, index) => (
              <FlowStep
                key={item.step}
                step={item.step}
                title={item.title}
                description={item.description}
                isLast={index === llmSteps.length - 1}
              />
            ))}
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">
                ⚠️ LLM 단독 방식은 교육과정과의 정합성이 낮을 수 있습니다.
                RAG 방식을 권장합니다.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ArchitectureFlow;

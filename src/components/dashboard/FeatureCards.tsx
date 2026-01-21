import { BookOpen, Brain, User, Gamepad2, MessageSquare, History } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: BookOpen,
    title: "1. 수업 설계 및 교안",
    description: "교육과정 기반 체계적인 수업 계획 수립",
  },
  {
    icon: Brain,
    title: "2. AI 교육 자료",
    description: "학습 수준에 맞는 맞춤형 자료 생성",
  },
  {
    icon: User,
    title: "3. 개별 맞춤형 학습",
    description: "학생별 학습 속도와 이해도 반영",
  },
  {
    icon: Gamepad2,
    title: "4. 퀴즈, 게임 및 자동 평가",
    description: "재미있는 학습 경험과 즉각적 평가",
  },
  {
    icon: MessageSquare,
    title: "5. 실시간 피드백 및 분석",
    description: "학습 과정 중 즉각적인 피드백 제공",
  },
  {
    icon: History,
    title: "6. 개인별 학습 이력 관리",
    description: "학습 진도와 성과 추적",
  },
];

const FeatureCards = () => {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold text-primary mb-6">
        AI 튜터 서비스 주요 기능
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feature, index) => (
          <Card
            key={feature.title}
            className="card-shadow border-accent-left hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <feature.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary text-sm mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;

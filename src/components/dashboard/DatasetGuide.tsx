import { Database, Link, BookMarked, Target, Layout, ClipboardList, CheckSquare, Layers } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const dataItems = [
  { icon: BookMarked, title: "교과 성격 및 목표", description: "초등 3학년 국어 교과의 기본 방향, 학습 목표, 교육 철학" },
  { icon: Target, title: "성취기준", description: "학년별·영역별 구체적인 학습 성취 기준" },
  { icon: Layout, title: "내용 체계", description: "단원별 학습 내용의 체계적 구조와 위계" },
  { icon: ClipboardList, title: "교수·학습 방법", description: "권장 교수법, 학습 활동 예시, 교육 자료 활용법" },
  { icon: CheckSquare, title: "평가 지침", description: "평가 방법, 평가 기준, 피드백 방안" },
  { icon: Layers, title: "단원별 학습 요소", description: "각 단원의 핵심 개념, 학습 활동, 텍스트 예시" },
];

const DatasetGuide = () => {
  return (
    <section className="mb-10">
      <div className="flex items-center gap-2 mb-6">
        <Database className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-semibold text-primary">RAG 데이터셋 구축 가이드</h2>
      </div>

      {/* 데이터 소스 */}
      <Card className="card-shadow mb-6 hover:card-shadow-hover transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Link className="w-5 h-5 text-primary" />
            데이터 소스
          </CardTitle>
        </CardHeader>
        <CardContent>
          <a
            href="https://www.moe.go.kr/boardCnts/viewRenew.do?boardID=141&lev=0&statusYN=W&s=moe&m=0404&opType=N&boardSeq=93458"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline break-all"
          >
            🔗 교육부 2022년 교육과정 고시 문서
          </a>
        </CardContent>
      </Card>

      {/* 추출할 데이터 항목 */}
      <Card className="card-shadow hover:card-shadow-hover transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-lg">추출할 RAG 데이터 항목</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {dataItems.map((item, index) => (
              <div
                key={item.title}
                className="p-4 bg-muted/50 rounded-lg border-accent-left hover:bg-muted transition-colors duration-200 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <item.icon className="w-4 h-4 text-primary" />
                  <h4 className="font-medium text-foreground">{item.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default DatasetGuide;

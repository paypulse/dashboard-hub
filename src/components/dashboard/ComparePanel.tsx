import { useState } from "react";
import { GitCompare, Wand2, Loader2, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ragResult = {
  title: "RAG+LLM 결과",
  content: `# 초등 3학년 국어 1단원: 재미있는 발상

## 학습 목표 (2022 교육과정 기반)
[3국01-01] 다양한 상황에서 자신의 생각을 말로 표현한다.
[3국02-03] 글을 읽고 중심 생각을 파악한다.

## 성취기준 연계
본 단원은 교육부 2022 개정 교육과정의 '창의적 사고 역량'과 
'의사소통 역량'을 기반으로 설계되었습니다.

## 차시별 계획
1차시: 발상의 개념 이해 (성취기준 3국01-01 연계)
2차시: 브레인스토밍 활동
3차시: 창의적 글쓰기 실습`,
  accuracy: 95,
  sourceCount: 12,
  features: [
    { label: "교육과정 정합성", status: "success" },
    { label: "성취기준 연계", status: "success" },
    { label: "출처 명시", status: "success" },
    { label: "최신 정보 반영", status: "success" },
  ],
};

const llmResult = {
  title: "LLM 단독 결과",
  content: `# 초등 3학년 국어 - 재미있는 발상

## 학습 목표
- 창의적인 생각을 할 수 있다
- 다양한 발상 방법을 알 수 있다

## 수업 내용
발상이란 새로운 생각을 떠올리는 것입니다.
여러 가지 방법으로 아이디어를 만들 수 있습니다.

## 활동 예시
- 브레인스토밍
- 마인드맵 그리기
- 자유롭게 상상하기`,
  accuracy: 68,
  sourceCount: 0,
  features: [
    { label: "교육과정 정합성", status: "warning" },
    { label: "성취기준 연계", status: "error" },
    { label: "출처 명시", status: "error" },
    { label: "일반적 정보", status: "warning" },
  ],
};

const ComparePanel = () => {
  const [query, setQuery] = useState("초등 3학년 국어 1단원 수업 교안을 만들어줘");
  const [isComparing, setIsComparing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const { toast } = useToast();

  const handleCompare = async () => {
    setIsComparing(true);
    await new Promise((resolve) => setTimeout(resolve, 2500));
    setShowResults(true);
    setIsComparing(false);
    
    toast({
      title: "비교 분석 완료",
      description: "RAG+LLM과 LLM 단독 결과를 비교했습니다.",
    });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "success":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "warning":
        return <AlertCircle className="w-4 h-4 text-yellow-500" />;
      case "error":
        return <XCircle className="w-4 h-4 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">RAG+LLM vs LLM 비교</h2>
        <p className="text-muted-foreground">동일한 질의에 대해 두 방식의 결과를 비교 분석합니다</p>
      </div>

      {/* Query Input */}
      <Card className="card-shadow">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GitCompare className="w-5 h-5 text-primary" />
            비교 질의
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="비교할 질의를 입력하세요..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            rows={2}
          />
          <Button
            onClick={handleCompare}
            disabled={isComparing || !query}
            className="gradient-primary text-primary-foreground hover:opacity-90"
          >
            {isComparing ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                비교 분석 중...
              </>
            ) : (
              <>
                <Wand2 className="w-4 h-4 mr-2" />
                비교 실행
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Results Comparison */}
      {showResults && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* RAG+LLM Result */}
          <Card className="card-shadow border-2 border-green-200">
            <CardHeader className="bg-green-50">
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="px-2 py-1 rounded gradient-primary text-primary-foreground text-xs">
                    RAG+LLM
                  </span>
                  {ragResult.title}
                </span>
                <span className="text-2xl font-bold text-green-600">{ragResult.accuracy}%</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-4">
              <div className="bg-muted/30 rounded-lg p-4 max-h-64 overflow-y-auto">
                <pre className="text-sm text-foreground whitespace-pre-wrap font-sans">
                  {ragResult.content}
                </pre>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm font-medium text-foreground">품질 지표</p>
                <div className="grid grid-cols-2 gap-2">
                  {ragResult.features.map((feature) => (
                    <div key={feature.label} className="flex items-center gap-2 text-sm">
                      {getStatusIcon(feature.status)}
                      <span className="text-muted-foreground">{feature.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-green-50 rounded-lg text-sm text-green-700">
                📚 참조 문서: {ragResult.sourceCount}개
              </div>
            </CardContent>
          </Card>

          {/* LLM Only Result */}
          <Card className="card-shadow border-2 border-yellow-200">
            <CardHeader className="bg-yellow-50">
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="px-2 py-1 rounded bg-secondary text-secondary-foreground text-xs">
                    LLM Only
                  </span>
                  {llmResult.title}
                </span>
                <span className="text-2xl font-bold text-yellow-600">{llmResult.accuracy}%</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-4">
              <div className="bg-muted/30 rounded-lg p-4 max-h-64 overflow-y-auto">
                <pre className="text-sm text-foreground whitespace-pre-wrap font-sans">
                  {llmResult.content}
                </pre>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm font-medium text-foreground">품질 지표</p>
                <div className="grid grid-cols-2 gap-2">
                  {llmResult.features.map((feature) => (
                    <div key={feature.label} className="flex items-center gap-2 text-sm">
                      {getStatusIcon(feature.status)}
                      <span className="text-muted-foreground">{feature.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-yellow-50 rounded-lg text-sm text-yellow-700">
                ⚠️ 교육과정 검증 불가
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Analysis Summary */}
      {showResults && (
        <Card className="card-shadow">
          <CardHeader>
            <CardTitle>📊 비교 분석 요약</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-green-50 rounded-lg text-center">
                <p className="text-3xl font-bold text-green-600">+27%</p>
                <p className="text-sm text-muted-foreground">정확도 향상</p>
              </div>
              <div className="p-4 bg-primary/10 rounded-lg text-center">
                <p className="text-3xl font-bold text-primary">12개</p>
                <p className="text-sm text-muted-foreground">참조 문서</p>
              </div>
              <div className="p-4 bg-secondary/10 rounded-lg text-center">
                <p className="text-3xl font-bold text-secondary">100%</p>
                <p className="text-sm text-muted-foreground">성취기준 연계</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ComparePanel;

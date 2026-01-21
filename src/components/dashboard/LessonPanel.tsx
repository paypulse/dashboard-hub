import { useState } from "react";
import { BookOpen, Wand2, Copy, Download, Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const units = [
  { value: "1", label: "1단원: 재미있는 발상" },
  { value: "2", label: "2단원: 문단의 짜임" },
  { value: "3", label: "3단원: 알맞은 높임 표현" },
  { value: "4", label: "4단원: 내 마음을 편지에 담아" },
  { value: "5", label: "5단원: 중요한 내용을 적어요" },
  { value: "6", label: "6단원: 일이 일어난 까닭" },
];

const sampleLessonPlan = `# 초등 3학년 국어 1단원: 재미있는 발상

## 📚 학습 목표
- 다양한 발상 방법을 이해하고 활용할 수 있다
- 창의적인 생각을 글로 표현할 수 있다
- 다른 사람의 발상을 존중하고 공유할 수 있다

## ⏱️ 차시별 수업 계획

### 1차시: 발상이란 무엇일까요?
- **도입 (10분)**: 재미있는 그림 보며 이야기 나누기
- **전개 (25분)**: 발상의 의미와 중요성 알아보기
- **정리 (5분)**: 배운 내용 정리 및 다음 차시 예고

### 2차시: 여러 가지 발상 방법
- **도입 (10분)**: 지난 시간 복습
- **전개 (25분)**: 브레인스토밍, 마인드맵 활동
- **정리 (5분)**: 발상 방법 정리

## 📝 평가 계획
- 형성평가: 발상 활동 참여도
- 총괄평가: 창의적 글쓰기 과제

## 📖 참고 자료
- 2022 개정 교육과정 국어과 성취기준
- 초등 3학년 국어 교과서 1단원`;

const LessonPanel = () => {
  const [selectedUnit, setSelectedUnit] = useState("");
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!selectedUnit) {
      toast({
        title: "단원을 선택해주세요",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setResult(sampleLessonPlan);
    setIsGenerating(false);
    
    toast({
      title: "교안 생성 완료",
      description: "RAG+LLM을 활용하여 교안이 생성되었습니다.",
    });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    toast({ title: "클립보드에 복사되었습니다" });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">수업 설계 및 교안 생성</h2>
        <p className="text-muted-foreground">RAG+LLM을 활용하여 교육과정 기반의 체계적인 교안을 생성합니다</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Section */}
        <Card className="card-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              교안 생성 설정
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                단원 선택
              </label>
              <Select value={selectedUnit} onValueChange={setSelectedUnit}>
                <SelectTrigger>
                  <SelectValue placeholder="단원을 선택하세요" />
                </SelectTrigger>
                <SelectContent>
                  {units.map((unit) => (
                    <SelectItem key={unit.value} value={unit.value}>
                      {unit.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                추가 요청사항 (선택)
              </label>
              <Textarea
                placeholder="예: 게임 활동을 포함해주세요, 모둠 활동 중심으로 구성해주세요..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                rows={4}
              />
            </div>

            <div className="flex gap-3">
              <Button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="flex-1 gradient-primary text-primary-foreground hover:opacity-90"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    생성 중...
                  </>
                ) : (
                  <>
                    <Wand2 className="w-4 h-4 mr-2" />
                    RAG+LLM으로 생성
                  </>
                )}
              </Button>
            </div>

            <div className="p-4 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground">
                💡 <strong>RAG+LLM 방식</strong>은 교육부 2022년 교육과정 문서를 참조하여 
                교육과정에 맞는 정확한 교안을 생성합니다.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Result Section */}
        <Card className="card-shadow">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                📄 생성된 교안
              </span>
              {result && (
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={handleCopy}>
                    <Copy className="w-4 h-4 mr-1" />
                    복사
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-1" />
                    다운로드
                  </Button>
                </div>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {result ? (
              <div className="bg-muted/30 rounded-lg p-4 max-h-[500px] overflow-y-auto">
                <pre className="text-sm text-foreground whitespace-pre-wrap font-sans">
                  {result}
                </pre>
              </div>
            ) : (
              <div className="h-64 flex items-center justify-center text-muted-foreground border-2 border-dashed border-border rounded-lg">
                <div className="text-center">
                  <BookOpen className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p>단원을 선택하고 생성 버튼을 클릭하세요</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LessonPanel;

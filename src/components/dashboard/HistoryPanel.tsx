import { FileText, Download, Eye, Trash2, Filter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const historyItems = [
  {
    id: 1,
    type: "lesson",
    title: "1단원 '재미있는 발상' 교안",
    method: "RAG+LLM",
    date: "2024-01-15 14:32",
    status: "완료",
  },
  {
    id: 2,
    type: "compare",
    title: "2단원 RAG vs LLM 비교",
    method: "비교 분석",
    date: "2024-01-15 13:45",
    status: "완료",
  },
  {
    id: 3,
    type: "lesson",
    title: "3단원 '알맞은 높임 표현' 교안",
    method: "RAG+LLM",
    date: "2024-01-15 11:20",
    status: "완료",
  },
  {
    id: 4,
    type: "lesson",
    title: "4단원 '내 마음을 편지에 담아' 교안",
    method: "RAG+LLM",
    date: "2024-01-14 16:55",
    status: "완료",
  },
  {
    id: 5,
    type: "compare",
    title: "1단원 RAG vs LLM 비교",
    method: "비교 분석",
    date: "2024-01-14 15:30",
    status: "완료",
  },
  {
    id: 6,
    type: "lesson",
    title: "5단원 '중요한 내용을 적어요' 교안",
    method: "LLM Only",
    date: "2024-01-14 14:10",
    status: "완료",
  },
];

const HistoryPanel = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">생성 이력</h2>
        <p className="text-muted-foreground">교안 생성 및 비교 분석 이력을 관리합니다</p>
      </div>

      <Card className="card-shadow">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              이력 목록
            </CardTitle>
            <div className="flex gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-32">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">전체</SelectItem>
                  <SelectItem value="lesson">교안 생성</SelectItem>
                  <SelectItem value="compare">비교 분석</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {historyItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      item.type === "lesson" ? "gradient-primary" : "bg-secondary"
                    }`}
                  >
                    <FileText className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{item.title}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span
                        className={`px-2 py-0.5 rounded text-xs ${
                          item.method === "RAG+LLM"
                            ? "bg-green-100 text-green-700"
                            : item.method === "비교 분석"
                            ? "bg-primary/10 text-primary"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {item.method}
                      </span>
                      <span>•</span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Download className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="card-shadow">
          <CardContent className="pt-6 text-center">
            <p className="text-4xl font-bold text-primary">12</p>
            <p className="text-sm text-muted-foreground">총 생성 횟수</p>
          </CardContent>
        </Card>
        <Card className="card-shadow">
          <CardContent className="pt-6 text-center">
            <p className="text-4xl font-bold text-green-600">10</p>
            <p className="text-sm text-muted-foreground">RAG+LLM 사용</p>
          </CardContent>
        </Card>
        <Card className="card-shadow">
          <CardContent className="pt-6 text-center">
            <p className="text-4xl font-bold text-secondary">8</p>
            <p className="text-sm text-muted-foreground">비교 분석</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HistoryPanel;

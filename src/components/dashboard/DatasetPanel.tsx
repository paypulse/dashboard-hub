import { Database, FileText, Search, Upload, CheckCircle, Clock, HardDrive } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";

const documents = [
  { id: 1, name: "2022 개정 교육과정 총론", chunks: 45, status: "indexed", size: "2.3 MB" },
  { id: 2, name: "초등학교 국어과 교육과정", chunks: 78, status: "indexed", size: "4.1 MB" },
  { id: 3, name: "3학년 국어 성취기준", chunks: 23, status: "indexed", size: "1.2 MB" },
  { id: 4, name: "국어과 교수학습 방법", chunks: 34, status: "indexed", size: "1.8 MB" },
  { id: 5, name: "국어과 평가 지침", chunks: 19, status: "indexed", size: "0.9 MB" },
];

const stats = [
  { label: "전체 문서", value: "5개", icon: FileText },
  { label: "총 청크 수", value: "199개", icon: Database },
  { label: "벡터 DB 크기", value: "10.3 MB", icon: HardDrive },
  { label: "마지막 업데이트", value: "오늘", icon: Clock },
];

const DatasetPanel = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">RAG 데이터셋 관리</h2>
        <p className="text-muted-foreground">교육부 2022년 교육과정 문서 기반 벡터 데이터베이스</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="card-shadow">
            <CardContent className="pt-4 pb-4">
              <div className="flex items-center gap-3">
                <stat.icon className="w-8 h-8 text-primary opacity-80" />
                <div>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Upload & Search */}
      <Card className="card-shadow">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="w-5 h-5 text-primary" />
            데이터셋 관리
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="문서 검색..." className="pl-10" />
            </div>
            <Button variant="outline">
              <Upload className="w-4 h-4 mr-2" />
              문서 업로드
            </Button>
          </div>

          {/* Document List */}
          <div className="border border-border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-3 text-sm font-medium text-muted-foreground">문서명</th>
                  <th className="text-center p-3 text-sm font-medium text-muted-foreground">청크 수</th>
                  <th className="text-center p-3 text-sm font-medium text-muted-foreground">크기</th>
                  <th className="text-center p-3 text-sm font-medium text-muted-foreground">상태</th>
                </tr>
              </thead>
              <tbody>
                {documents.map((doc) => (
                  <tr key={doc.id} className="border-t border-border hover:bg-muted/30 transition-colors">
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-foreground">{doc.name}</span>
                      </div>
                    </td>
                    <td className="p-3 text-center text-sm text-muted-foreground">{doc.chunks}</td>
                    <td className="p-3 text-center text-sm text-muted-foreground">{doc.size}</td>
                    <td className="p-3 text-center">
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                        <CheckCircle className="w-3 h-3" />
                        인덱싱 완료
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Embedding Info */}
      <Card className="card-shadow">
        <CardHeader>
          <CardTitle>임베딩 설정</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">임베딩 모델</p>
              <p className="font-medium text-foreground">OpenAI text-embedding-3-small</p>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">청크 크기</p>
              <p className="font-medium text-foreground">500-1000 토큰</p>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">벡터 DB</p>
              <p className="font-medium text-foreground">Pinecone</p>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-muted-foreground">벡터 DB 용량 사용률</span>
              <span className="font-medium text-foreground">10.3 / 100 MB</span>
            </div>
            <Progress value={10.3} className="h-2" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DatasetPanel;

Scoreboard API Module Specification
📖 Overview / Tổng quan
This document specifies the API module for managing and displaying a live scoreboard on a website. The module will handle score updates and provide live data for the top 10 users. It will also ensure data integrity and security, preventing unauthorized score manipulation.

Tài liệu này mô tả module API để quản lý và hiển thị bảng xếp hạng điểm số trực tuyến trên website. Module này sẽ xử lý việc cập nhật điểm số và cung cấp dữ liệu trực tiếp cho 10 người chơi có điểm cao nhất. Đồng thời đảm bảo tính toàn vẹn và bảo mật dữ liệu, ngăn chặn việc tăng điểm trái phép.

🎯 Objectives / Mục tiêu
Live scoreboard updates / Cập nhật bảng điểm theo thời gian thực
Top 10 user scores / Hiển thị 10 người chơi có điểm số cao nhất
Authorized score updates / Chỉ người dùng hợp lệ mới được phép cập nhật điểm số
Secure API / Ngăn chặn thao tác điểm số trái phép
Efficient execution flow / Tối ưu luồng thực thi để tăng hiệu suất
🏗️ Architecture / Kiến trúc hệ thống
Flow of Execution / Luồng xử lý:

User performs an action / Người dùng thực hiện hành động
Action triggers API call / Hành động này gọi API
API authenticates request / API xác thực yêu cầu
API updates user’s score / API cập nhật điểm số của người dùng
Top 10 scores updated in real-time / Cập nhật bảng xếp hạng top 10 theo thời gian thực
🗂️ API Endpoints / Các điểm cuối API
1️⃣ Update Score / Cập nhật điểm số
POST /api/score/update
Request Body:

json
Copy
Edit
{
  "userId": "12345",
  "action": "complete_task"
}
Request Headers:

http
Copy
Edit
Authorization: Bearer <JWT_TOKEN>
Response:

json
Copy
Edit
{
  "message": "Score updated successfully",
  "score": 150
}
Error Response:

json
Copy
Edit
{
  "error": "Unauthorized request"
}
2️⃣ Get Top 10 Scores / Lấy top 10 điểm cao nhất
GET /api/score/top10
Response:

json
Copy
Edit
[
  { "userId": "12345", "username": "player1", "score": 500 },
  { "userId": "67890", "username": "player2", "score": 450 }
]
🔒 Security Measures / Các biện pháp bảo mật
JWT Authentication / Xác thực bằng JWT
Rate Limiting / Giới hạn số lượng request
Action Validation / Xác thực hành động người dùng
IP Whitelisting (Optional) / Danh sách IP cho phép (tuỳ chọn)
🗺️ Flow Diagram / Sơ đồ luồng xử lý
pgsql
Copy
Edit
              ┌───────────────────────────────┐
              │       User performs action     │
              └───────────────────────────────┘
                           │
                           ▼
              ┌───────────────────────────────┐
              │     Frontend calls API         │
              │     POST /api/score/update     │
              └───────────────────────────────┘
                           │
                           ▼
              ┌───────────────────────────────┐
              │     API validates JWT         │
              └───────────────────────────────┘
                           │
               ┌───────────┴───────────┐
      ┌───────▶│    Valid Token?       │───────┐
      │        └───────────┬───────────┘       │
      │                    │                  │
      │             ┌──────▼─────┐      ┌──────▼───────┐
      │             │  Unauthorized│    │ Update Score │
      │             │   Response   │    │   in DB      │
      │             └──────▲───────┘    └──────▲───────┘
      │                    │                  │
      │        ┌───────────┴───────────┐       │
      └────────│   Return Success      │◀──────┘
               └──────────────────────┘
🛠️ Recommendations for Improvement / Các đề xuất cải tiến
WebSocket for Real-time Updates / Dùng WebSocket để cập nhật bảng điểm theo thời gian thực
Caching for Performance / Dùng bộ nhớ đệm (Redis) để tăng hiệu suất truy vấn top 10
Audit Logs / Ghi lại nhật ký hoạt động để theo dõi hành vi bất thường
Score Calculation Logic / Xây dựng hệ thống tính điểm linh hoạt dựa trên nhiều tiêu chí khác nhau
🚀 How Backend Team Should Implement / Hướng dẫn triển khai cho đội Backend
Set up ExpressJS with TypeScript
Create SQLite or PostgreSQL database
Implement JWT middleware for security
Create RESTful routes for score updates and leaderboard retrieval
Optimize with caching and WebSocket (optional)

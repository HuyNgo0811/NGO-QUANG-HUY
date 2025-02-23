// Iterative Approach
function sum_to_n_iterative(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
// Complexity Analysis:
// Time Complexity: - Linear, iterates from 1 to n exactly once.
// Time Complexity: - Chạy vòng lặp từ 1 đến n, nên thời gian thực thi tỷ lệ thuận với n.
// Space Complexity: - Constant, uses only a fixed amount of extra space.
// Space Complexity: - Chỉ sử dụng một biến sum để lưu tổng, không cần bộ nhớ phụ thuộc vào n.


// Formula Approach
function sum_to_n_formula(n) {
    return (n * (n + 1)) / 2;
}
// Complexity Analysis:
// Time Complexity: - Constant, uses a direct mathematical formula.
// Time Complexity: - Chỉ cần thực hiện vài phép toán đơn giản, không phụ thuộc vào n.
// Space Complexity: - Constant, no extra space required.
// Space Complexity: - Không sử dụng thêm bộ nhớ ngoài.


// Recursive Approach
function sum_to_n_recursive(n) {
    if (n === 1) {
        return 1;
    }
    return n + sum_to_n_recursive(n - 1);
}
// Complexity Analysis:
// Time Complexity: - Linear, makes n recursive calls.
// Time Complexity: - Gọi đệ quy n lần cho đến khi n = 1.
// Space Complexity: - Linear, due to the recursion stack.
// Space Complexity: - Mỗi lần gọi đệ quy sẽ tạo một stack frame mới trên bộ nhớ, có thể gây tràn stack khi n quá lớn.


// Test the functions
console.log(sum_to_n_iterative(6)); // Output: 21
console.log(sum_to_n_formula(5));   // Output: 15
console.log(sum_to_n_recursive(4)); // Output: 10

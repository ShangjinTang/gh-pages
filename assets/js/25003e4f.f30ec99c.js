"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2838],{4351:n=>{n.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"cpp/calculate-fibonnaci-with-template-meta-programming","metadata":{"permalink":"/blog/cpp/calculate-fibonnaci-with-template-meta-programming","source":"@site/blog/2024-02-20-calculate-fibonacci-with-template-meta-programming/index.mdx","title":"\u6a21\u677f\u5143\u7f16\u7a0b\uff1a\u6590\u6ce2\u90a3\u5951\u6570\u5217","description":"\u5728\u7f16\u7a0b\u4e2d\uff0c\u6590\u6ce2\u90a3\u5951\u6570\u5217\u662f\u4e00\u4e2a\u7ecf\u5178\u7684\u6570\u5b66\u95ee\u9898\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u4f20\u7edf\u9012\u5f52\u51fd\u6570\u6765\u8ba1\u7b97\u6590\u6ce2\u90a3\u5951\u6570\u5217\u3002\u4f46\u662f\u8fd0\u884c\u65f6\u8ba1\u7b97\u9012\u5f52\u4f1a\u9020\u6210\u6bd4\u8f83\u957f\u7684\u8017\u65f6\u3002","date":"2024-02-20T00:00:00.000Z","tags":[{"label":"cpp","permalink":"/blog/tags/cpp"},{"label":"template-meta-programming","permalink":"/blog/tags/template-meta-programming"}],"hasTruncateMarker":true,"authors":[{"name":"Sol","title":"\u5168\u6808\u5f00\u53d1\u8005","imageURL":"https://github.com/ShangjinTang.png","key":"sol"}],"frontMatter":{"authors":["sol"],"slug":"cpp/calculate-fibonnaci-with-template-meta-programming","tags":["cpp","template-meta-programming"]},"unlisted":false,"nextItem":{"title":"Ubuntu 22.04 \u66f4\u65b0 C++ \u7f16\u8bd1\u5668","permalink":"/blog/cpp/update-compiler-on-ubuntu2204"}},"content":"\u5728\u7f16\u7a0b\u4e2d\uff0c\u6590\u6ce2\u90a3\u5951\u6570\u5217\u662f\u4e00\u4e2a\u7ecf\u5178\u7684\u6570\u5b66\u95ee\u9898\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u4f20\u7edf\u9012\u5f52\u51fd\u6570\u6765\u8ba1\u7b97\u6590\u6ce2\u90a3\u5951\u6570\u5217\u3002\u4f46\u662f\u8fd0\u884c\u65f6\u8ba1\u7b97\u9012\u5f52\u4f1a\u9020\u6210\u6bd4\u8f83\u957f\u7684\u8017\u65f6\u3002\\n\\n\u6a21\u677f\u5143\u7f16\u7a0b\u53ef\u4ee5\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u5728\u7f16\u8bd1\u65f6\u8ba1\u7b97\u6590\u6ce2\u90a3\u5951\u6570\u5217\uff0c\u4ece\u800c\u63d0\u9ad8\u6267\u884c\u6548\u7387\u3002\\n\\n\x3c!--truncate--\x3e\\n\\n\u6590\u6ce2\u90a3\u5951\u6570\u5217\u6709\u4e24\u79cd\uff1a\\n\\n- \u4ece $$0$$ \u5f00\u59cb\uff1a $$ 0,1,1,2,3,5,8,... $$\\n- \u4ece $$1$$ \u5f00\u59cb\uff1a $$ 1,1,2,3,5,8,... $$\\n\\n\u6211\u4eec\u5047\u8bbe\u4ece $$0$$ \u5f00\u59cb\uff0c\u5373 $$ f(0) = 0, f(1) = 1, f(2) = 1...$$\u3002\\n\\n## \u4f20\u7edf\u9012\u5f52\\n\\n```cpp\\n/**\\n * @file fibonacci_recursive.cpp\\n * @brief calculate fibonacci value recursively\\n */\\n#include <iostream>\\n\\nunsigned int calc_fibonacci(unsigned int i) {\\n    if (i == 0 || i == 1) {\\n        return i;\\n    }\\n    return calc_fibonacci(i - 1) + calc_fibonacci(i - 2);\\n};\\n\\nint main() {\\n    std::cout << calc_fibonacci(42) << \'\\\\n\';\\n    return 0;\\n}\\n```\\n\\n```plain\\n> g++ -O0 -g a.out fibonacci_recursive.cpp -o prog_fibonacci_recursive\\n\\n> ./prog_fibonacci_recursive\\n267914296\\n\\n> hyperfine \\"./prog_fibonacci_recursive\\"\\nBenchmark 1: ./prog_fibonacci_recursive\\n  Time (mean \xb1 \u03c3):      1.657 s \xb1  0.015 s    [User: 1.652 s, System: 0.002 s]\\n  Range (min \u2026 max):    1.647 s \u2026  1.696 s    10 runs\\n```\\n\\n## \u6a21\u677f\u5143\u7f16\u7a0b\u5b9e\u73b0\\n\\n### C++11\\n\\n\u9996\u5148\uff0c\u6211\u4eec\u5b9a\u4e49\u4e00\u4e2a\u6a21\u677f\u7c7b `fibonacci`\uff0c\u5b83\u5177\u6709\u4e00\u4e2a\u9759\u6001\u6210\u5458\u53d8\u91cf `value`\uff0c\u7528\u4e8e\u5b58\u50a8\u6590\u6ce2\u90a3\u5951\u6570\u5217\u7684\u503c\u3002\u8be5\u6a21\u677f\u7c7b\u4f7f\u7528\u9012\u5f52\u5b9a\u4e49\uff0c\u6839\u636e\u7ed9\u5b9a\u7684\u5927\u5c0f\u8ba1\u7b97\u6590\u6ce2\u90a3\u5951\u6570\u5217\u503c\u3002\\n\\n```cpp\\ntemplate <int size>\\nstruct fibonacci {\\n    static constexpr unsigned int value = fibonacci<size - 1>::value + fibonacci<size - 2>::value;\\n};\\n\\ntemplate <>\\nstruct fibonacci<0> {\\n    static constexpr unsigned int value = 0;\\n};\\n\\ntemplate <>\\nstruct fibonacci<1> {\\n    static constexpr unsigned int value = 1;\\n};\\n```\\n\\n\u4f7f\u7528 `fibonacci<42>::value` \u5219\u53ef\u4ee5\u5f97\u5230\u5bf9\u5e94\u7684\u7ed3\u679c\u3002\u8fd9\u4e2a\u8bed\u6cd5\u7c7b\u4f3c\u4e8e\u4f20\u7edf\u7684\u9012\u5f52\uff0c\u4f46\u662f\u4f1a\u5728\u7f16\u8bd1\u671f\u8fdb\u884c\u6c42\u503c\u3002\\n\\n\u4f7f\u7528\u6a21\u677f\u5143\u7f16\u7a0b\u7684\u6590\u6ce2\u90a3\u5951\u6570\u5217\u8ba1\u7b97\u65b9\u6cd5\u76f8\u6bd4\u4e8e\u4f20\u7edf\u7684\u9012\u5f52\u65b9\u6cd5\u5177\u6709\u66f4\u9ad8\u7684\u6548\u7387\u3002\u5b83\u5728\u7f16\u8bd1\u65f6\u5b8c\u6210\u8ba1\u7b97\uff0c\u907f\u514d\u4e86\u8fd0\u884c\u65f6\u7684\u91cd\u590d\u8ba1\u7b97\uff0c\u4ece\u800c\u63d0\u9ad8\u4e86\u7a0b\u5e8f\u7684\u6027\u80fd\u3002\\n\\n\u8fd9\u91cc\u4f7f\u7528\u4e86\u7f16\u8bd1\u671f\u6c42\u503c\u7684\u5173\u952e\u5b57 `constexpr`\uff0c\u56e0\u6b64\u9700\u8981 C++11 \u7248\u672c\u53ca\u4ee5\u4e0a\u3002\\n\\n```plain\\n> g++ -O0 -g -std=c++11 a.out fibonacci_tmp.cpp -o prog_fibonacci_tmp\\n\\n> ./prog_fibonacci_tmp\\n267914296\\n\\n> hyperfine \\"./prog_fibonacci_tmp\\"\\nBenchmark 1: ./prog_fibonacci_tmp\\n  Time (mean \xb1 \u03c3):       0.8 ms \xb1   0.1 ms    [User: 0.9 ms, System: 0.2 ms]\\n  Range (min \u2026 max):     0.6 ms \u2026   1.5 ms    1605 runs\\n```\\n\\n**\u5728\u8ba1\u7b97\u7b2c 42 \u4e2a\u6590\u6ce2\u90a3\u5951\u6570\u7684\u65f6\u5019\uff0c\u8fd0\u884c\u65f6\u95f4\u4ec5\u9700 ~0.8ms\uff0c\u76f8\u5f53\u4e8e\u4f20\u7edf\u9012\u5f52\u65b9\u6cd5 ~1.6s \u7684 1/2000\u3002**\\n\\n### C++14\\n\\n\u5728 C++17 \u4e2d\uff0c\u901a\u5e38\u4f7f\u7528 `_v` \u7ed3\u5c3e\u5f53\u4f5c `value` \u7c7b\u578b\uff08\u53c2\u89c1\u8fd9\u7bc7 [proposal](https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2014/n3854.htm)) \uff0c\u6bd4\u5982\uff1a\\n\\n```cpp\\ntemplate <struct T>\\nconstexpr bool is_integral_v = is_integral<T>::value;\\n```\\n\\n\u7c7b\u4f3c\u7684\uff0c\u6211\u4eec\u53ef\u4ee5\u5b9a\u4e49\u4e00\u4e2a\u6a21\u677f\u53d8\u91cf `fibonacci_v`\uff0c\u7528\u4e8e\u65b9\u4fbf\u5730\u83b7\u53d6\u6590\u6ce2\u90a3\u5951\u6570\u5217\u7684\u503c\u3002\\n\\n```cpp\\ntemplate <int size>\\nconstexpr auto fibonacci_v = fibonacci<size>::value;\\n```\\n\\n\u6ce8\u610f\uff0c\u8fd9\u79cd `_v` \u7684\u5b9e\u73b0\u5e76\u4e0d\u9700\u8981 C++17 \u7684\u7f16\u8bd1\u5668\uff1bC++14 \u7684\u7f16\u8bd1\u5668\u5373\u53ef\u4ee5\u6ee1\u8db3\u9700\u6c42\u3002\\n\\n\u7f16\u8bd1\uff1a\\n\\n```plain\\n> g++ -O0 -g -std=c++14 a.out fibonacci_tmp.cpp -o prog_fibonacci_tmp\\n```\\n\\n### C++20\\n\\nC++20 \u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 `concept` / `requires` \uff0c\u5408\u5e76\u4e24\u4e2a\u504f\u7279\u5316\u6a21\u677f\u3002\\n\\n```\\ntemplate <int size>\\nconcept FibonacciBaseCase = (size == 0) || (size == 1);\\n\\ntemplate <int size>\\nrequires FibonacciBaseCase<size>\\nstruct fibonacci<size> {\\npublic:\\n    static constexpr unsigned int value = size;\\n};\\n```\\n\\n\u7f16\u8bd1\uff1a\\n\\n```plain\\n> g++ -O0 -g -std=c++20 a.out fibonacci_tmp.cpp -o prog_fibonacci_tmp\\n```\\n\\n## \u5b8c\u6574\u4ee3\u7801\\n\\n```cpp tab={\\"label\\":\\"c++11\\"}\\n#include <iostream>\\n\\ntemplate <int size>\\nstruct fibonacci {\\npublic:\\n    static constexpr unsigned int value = fibonacci<size - 1>::value + fibonacci<size - 2>::value;\\n};\\n\\ntemplate <>\\nstruct fibonacci<0> {\\npublic:\\n    static constexpr unsigned int value = 0;\\n};\\n\\ntemplate <>\\nstruct fibonacci<1> {\\npublic:\\n    static constexpr unsigned int value = 1;\\n};\\n\\nint main() {\\n    std::cout << fibonacci<42>::value << \'\\\\n\';\\n    return 0;\\n}\\n```\\n\\n```cpp tab={\\"label\\":\\"c++14\\"}\\n#include <iostream>\\n\\ntemplate <int size>\\nstruct fibonacci {\\npublic:\\n    static constexpr unsigned int value = fibonacci<size - 1>::value + fibonacci<size - 2>::value;\\n};\\n\\ntemplate <>\\nstruct fibonacci<0> {\\npublic:\\n    static constexpr unsigned int value = 0;\\n};\\n\\ntemplate <>\\nstruct fibonacci<1> {\\npublic:\\n    static constexpr unsigned int value = 1;\\n};\\n\\n// highlight-add-start\\ntemplate <int size>\\nconstexpr auto fibonacci_v = fibonacci<size>::value;\\n// highlight-add-end\\n\\nint main() {\\n    // highlight-delete\\n    // std::cout << fibonacci<42>::value << \'\\\\n\';\\n    // highlight-add\\n    std::cout << fibonacci_v<42> << \'\\\\n\';\\n    return 0;\\n}\\n```\\n\\n```cpp tab={\\"label\\":\\"c++20\\"}\\n#include <iostream>\\n\\ntemplate <int size>\\nstruct fibonacci {\\npublic:\\n    static constexpr unsigned int value = fibonacci<size - 1>::value + fibonacci<size - 2>::value;\\n};\\n\\n// highlight-delete-start\\n// template <>\\n// struct fibonacci<0> {\\n// public:\\n//     static constexpr unsigned int value = 0;\\n// };\\n\\n// template <>\\n// struct fibonacci<1> {\\n// public:\\n//     static constexpr unsigned int value = 1;\\n// };\\n// highlight-delete-end\\n// highlight-add-start\\ntemplate <int size>\\nconcept FibonacciBaseCase = (size == 0) || (size == 1);\\n\\ntemplate <int size>\\nrequires FibonacciBaseCase<size>\\nstruct fibonacci<size> {\\npublic:\\n    static constexpr unsigned int value = size;\\n};\\n// highlight-add-end\\n\\ntemplate <int size>\\nconstexpr auto fibonacci_v = fibonacci<size>::value;\\n\\nint main() {\\n    std::cout << fibonacci_v<42> << \'\\\\n\';\\n    return 0;\\n}\\n```\\n\\n\u901a\u8fc7\u4f7f\u7528\u6a21\u677f\u5143\u7f16\u7a0b\u6280\u672f\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u7f16\u8bd1\u65f6\u8ba1\u7b97\u6590\u6ce2\u90a3\u5951\u6570\u5217\uff0c\u907f\u514d\u4e86\u9012\u5f52\u51fd\u6570\u7684\u91cd\u590d\u8ba1\u7b97\uff0c\u5728\u4e00\u4e9b\u9700\u8981\u9ad8\u6548\u8ba1\u7b97\u6590\u6ce2\u90a3\u5951\u6570\u5217\u7684\u573a\u666f\u4e0b\uff0c\u8fd9\u79cd\u65b9\u6cd5\u53ef\u4ee5\u63d0\u4f9b\u66f4\u597d\u7684\u6027\u80fd\u3002\\n\\n\u5e0c\u671b\u8fd9\u7bc7\u535a\u5ba2\u80fd\u5e2e\u52a9\u4f60\u7406\u89e3\u5982\u4f55\u4f7f\u7528\u6a21\u677f\u5143\u7f16\u7a0b\u5b9e\u73b0\u6590\u6ce2\u90a3\u5951\u6570\u5217\u7684\u7f16\u8bd1\u671f\u8ba1\u7b97\uff0c\u5e76\u5bf9\u6b64\u6709\u6240\u542f\u53d1\u3002"},{"id":"cpp/update-compiler-on-ubuntu2204","metadata":{"permalink":"/blog/cpp/update-compiler-on-ubuntu2204","source":"@site/blog/2024-01-31-cpp-update-compiler-on-ubuntu2204/index.mdx","title":"Ubuntu 22.04 \u66f4\u65b0 C++ \u7f16\u8bd1\u5668","description":"Ubuntu 22.04 \u9ed8\u8ba4\u4f7f\u7528 g++-11 \u548c clang++-14 \u4f5c\u4e3a\u9ed8\u8ba4\u7684 g++ \u548c clang++\u3002","date":"2024-01-31T00:00:00.000Z","tags":[{"label":"cpp","permalink":"/blog/tags/cpp"},{"label":"ubuntu2204","permalink":"/blog/tags/ubuntu-2204"},{"label":"clang","permalink":"/blog/tags/clang"},{"label":"gcc","permalink":"/blog/tags/gcc"}],"hasTruncateMarker":true,"authors":[{"name":"Sol","title":"\u5168\u6808\u5f00\u53d1\u8005","imageURL":"https://github.com/ShangjinTang.png","key":"sol"}],"frontMatter":{"authors":["sol"],"slug":"cpp/update-compiler-on-ubuntu2204","tags":["cpp","ubuntu2204","clang","gcc"]},"unlisted":false,"prevItem":{"title":"\u6a21\u677f\u5143\u7f16\u7a0b\uff1a\u6590\u6ce2\u90a3\u5951\u6570\u5217","permalink":"/blog/cpp/calculate-fibonnaci-with-template-meta-programming"},"nextItem":{"title":"\u505c\u6b62\u56fd\u9645\u5316\u652f\u6301","permalink":"/blog/site/remove-i18n-support"}},"content":"Ubuntu 22.04 \u9ed8\u8ba4\u4f7f\u7528 `g++-11` \u548c `clang++-14` \u4f5c\u4e3a\u9ed8\u8ba4\u7684 `g++` \u548c `clang++`\u3002\\n\\n\u672c\u6587\u8bf4\u660e\u5982\u4f55\u5347\u7ea7 C++ \u7f16\u8bd1\u5668\u5e76\u8bbe\u7f6e\u9ed8\u8ba4\u7248\u672c\uff0c\u4ece\u800c\u4f7f\u7528\u6700\u65b0\u7684 C++ \u8bed\u8a00\u7279\u6027\u3002\\n\\n\x3c!--truncate--\x3e\\n\\n## \u5b89\u88c5\u6700\u65b0\u7248\u672c\u7684 C++ \u7f16\u8bd1\u5668 {#install-latest-c++-compiler}\\n\\n### \u5b89\u88c5\u6700\u65b0\u7684 g++ {#install-latest-g++}\\n\\n```bash\\nsudo apt update\\nsudo add-apt-repository ppa:ubuntu-toolchain-r/test\\nsudo apt install gcc-12 g++-12 -y\\nsudo apt install gcc-13 g++-13 -y\\n```\\n\\n### \u5b89\u88c5\u6700\u65b0\u7684 clang++ {#install-latest-clang++}\\n\\n\u53c2\u89c1 [LLVM Debian/Ubuntu Packages](https://apt.llvm.org/) \u4e2d\u7684\u5b89\u88c5\u6307\u5357\uff1a\\n\\n```bash\\nwget https://apt.llvm.org/llvm.sh\\nchmod +x llvm.sh\\n# sudo ./llvm.sh <version number> all\\n# or\\n# sudo ./llvm.sh all\\nsudo ./llvm.sh 18 all\\n```\\n\\n## \u5207\u6362\u7f16\u8bd1\u5668\u7684\u9ed8\u8ba4\u7248\u672c {#change-default-version}\\n\\n\u4e0a\u8ff0\u547d\u4ee4\u6267\u884c\u4e4b\u540e\uff0c\u6211\u4eec\u4f1a\u53d1\u73b0\uff0c`g++` \u4ecd\u7136\u662f `g++11`, `clang++` \u4ecd\u7136\u662f `clang++-14`\u3002\\n\\n\u8fd9\u91cc\u4ecb\u7ecd\u4e00\u4e0b `update-alternatives` \uff0c\u7531\u4e8e\u7ba1\u7406 Ubuntu \u4e0a\u8f6f\u4ef6\u7248\u672c\u7684\u5207\u6362\uff0c\u4f7f\u5176\u591a\u7248\u672c\u5171\u5b58\u3002\u8bed\u6cd5\uff1a\\n\\n\u6ce8\u518c\u53ef\u9009\u7684\u8f6f\u4ef6\u7248\u672c\uff1a\\n\\n```bash\\nsudo update-alternatives --install link name path priority \\\\\\n                        [--slave link name path]\\n```\\n\\n\u5207\u6362\u9ed8\u8ba4\u7684\u8f6f\u4ef6\u7248\u672c\uff1a\\n\\n```bash\\nsudo update-alternatives --config name\\n```\\n\\n:::warning\\n\\n\u5207\u6362\u7f16\u8bd1\u5668\u8f6f\u4ef6\u5305\u53ef\u80fd\u6709\u98ce\u9669\uff0c\u5efa\u8bae\u53ea\u5728\u4e2a\u4eba\u8ba1\u7b97\u673a\u4e0a\u4f7f\u7528\u3002\\n\\n:::\\n\\n### \u5207\u6362 g++ \u7684\u9ed8\u8ba4\u7248\u672c {#change-g++-default-version}\\n\\n\u6ce8\u518c `gcc` / `g++` \u7248\u672c\uff1a\\n\\n```bash\\nsudo update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-11 11 --slave /usr/bin/g++ g++ /usr/bin/g++-11\\nsudo update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-12 12 --slave /usr/bin/g++ g++ /usr/bin/g++-12\\nsudo update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-13 13 --slave /usr/bin/g++ g++ /usr/bin/g++-13\\n```\\n\\n\u9009\u62e9\u9ed8\u8ba4 `gcc` / `g++` \u7248\u672c\uff1a\\n\\n```bash\\nsudo update-alternatives --config gcc\\n```\\n\\n\u4f1a\u5f39\u51fa\u4ee5\u4e0b\u9009\u9879\uff1a\\n\\n```bash\\nThere are 3 choices for the alternative gcc (providing /usr/bin/gcc).\\n\\n  Selection    Path             Priority   Status\\n------------------------------------------------------------\\n* 0            /usr/bin/gcc-13   13        auto mode\\n  1            /usr/bin/gcc-11   11        manual mode\\n  2            /usr/bin/gcc-12   12        manual mode\\n  3            /usr/bin/gcc-13   13        manual mode\\n\\nPress <enter> to keep the current choice[*], or type selection number:\\n```\\n\\n\u8f93\u5165\u5e8f\u53f7\u5373\u53ef\u3002\\n\\n### \u5207\u6362 clang++ \u7684\u9ed8\u8ba4\u7248\u672c {#change-clang++-default-version}\\n\\n`clang` / `clang++` \u662f LLVM \u5de5\u5177\u94fe\u7684\u4e00\u90e8\u5206\uff0c\u66f4\u65b0\u7684\u65f6\u5019\uff0c\u5efa\u8bae\u628a llvm \u6240\u6709\u5de5\u5177\u4e00\u8d77\u66f4\u65b0\u3002\\n\\n\u8fd9\u91cc\u4f7f\u7528\u4ee5\u4e0b\u811a\u672c\u8fdb\u884c\u6279\u91cf\u6ce8\u518c:\\n\\n```bash\\nwget https://raw.githubusercontent.com/ShangjinTang/dotfiles/05ef87daae29475244c276db5d406b58c52be445/linux/ubuntu/22.04/bin/update-alternatives-clang\\nsudo bash ./update-alternatives-clang\\n```\\n\\n\u7ed3\u679c\u5982\u4e0b:\\n\\n```plain\\n[Adding alternative /usr/bin/clang-14 ...]\\nMaster command: clang-14\\nSlave commands: analyze-build-14 bugpoint-14 ...\\n[Adding alternative /usr/bin/clang-14: succeeded]\\n\\n[Adding alternative /usr/bin/clang-18 ...]\\nMaster command: clang-18\\nSlave commands: amdgpu-arch-18 analyze-build-18 ...\\n[Adding alternative /usr/bin/clang-18: succeeded]\\n\\n======================================================================\\nclang alternative is set to: /usr/bin/clang-18\\n======================================================================\\n...\\n```\\n\\n\u540c\u4e0a\u9762\u7684 `gcc`/`g++` \u7248\u672c\u5207\u6362\uff0c\u5207\u6362 `clang` / `llvm` \u5de5\u5177\u94fe\u7248\u672c\u547d\u4ee4\u5982\u4e0b\uff1a\\n\\n```bash\\nsudo update-alternatives --config clang\\n```\\n\\n\u4f1a\u5f39\u51fa\u4ee5\u4e0b\u9009\u9879\uff1a\\n\\n```bash\\nThere are 2 choices for the alternative clang (providing /usr/bin/clang).\\n\\n  Selection    Path               Priority   Status\\n------------------------------------------------------------\\n* 0            /usr/bin/clang-18   18        auto mode\\n  1            /usr/bin/clang-14   14        manual mode\\n  2            /usr/bin/clang-18   18        manual mode\\n\\nPress <enter> to keep the current choice[*], or type selection number:\\n```\\n\\n\u8f93\u5165\u5e8f\u53f7\u5373\u53ef\u3002"},{"id":"site/remove-i18n-support","metadata":{"permalink":"/blog/site/remove-i18n-support","source":"@site/blog/2024-01-30-site-remove-i18n-support/index.mdx","title":"\u505c\u6b62\u56fd\u9645\u5316\u652f\u6301","description":"\u5220\u9664\u6240\u6709\u7684\u6587\u7ae0\u7684\u56fd\u9645\u5316\u652f\u6301\u3002\u4e4b\u524d\u6240\u6709\u6587\u7ae0\u5747\u6709\u53cc\u8bed\u7248\u672c\uff0c\u540e\u7eed\u6240\u6709\u6587\u7ae0\u53ea\u4f1a\u6709\u5355\u4e2a\u8bed\u8a00\u7248\u672c\u3002","date":"2024-01-30T00:00:00.000Z","tags":[],"hasTruncateMarker":true,"authors":[{"name":"Sol","title":"\u5168\u6808\u5f00\u53d1\u8005","imageURL":"https://github.com/ShangjinTang.png","key":"sol"}],"frontMatter":{"authors":["sol"],"slug":"site/remove-i18n-support"},"unlisted":false,"prevItem":{"title":"Ubuntu 22.04 \u66f4\u65b0 C++ \u7f16\u8bd1\u5668","permalink":"/blog/cpp/update-compiler-on-ubuntu2204"},"nextItem":{"title":"\u652f\u6301 Font Awesome","permalink":"/blog/mdx/support-fontawesome"}},"content":"\u5220\u9664\u6240\u6709\u7684\u6587\u7ae0\u7684\u56fd\u9645\u5316\u652f\u6301\u3002\u4e4b\u524d\u6240\u6709\u6587\u7ae0\u5747\u6709\u53cc\u8bed\u7248\u672c\uff0c\u540e\u7eed\u6240\u6709\u6587\u7ae0\u53ea\u4f1a\u6709\u5355\u4e2a\u8bed\u8a00\u7248\u672c\u3002\\n\\n\x3c!--truncate--\x3e\\n\\n\u7531\u4e8e\u96be\u4ee5\u957f\u671f\u7ef4\u62a4\u548c\u4fdd\u8bc1\u5185\u5bb9\u7684\u4e00\u81f4\u6027\uff0c\u5220\u9664\u6240\u6709\u7684\u53cc\u8bed\u6587\u7ae0\u548c docusaurus i18n \u56fd\u9645\u5316\u914d\u7f6e\uff1a\\n\\n1. \u53cc\u8bed\u6587\u7ae0\u9700\u8981\u989d\u5916\u7684\u7ffb\u8bd1\u65f6\u95f4\u3002\\n\\n2. \u672c\u7ad9\u4f7f\u7528 docusaurus \u90e8\u7f72\uff0c\u4f46\u662f docusaurus \u5728\u5168\u5c40\u5316\u5b58\u5728\u5404\u79cd\u95ee\u9898\uff0c\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\uff1a\\n\\n   - \u9700\u8981\u4fdd\u8bc1\u6587\u7ae0\u94fe\u63a5\u7684\u4e00\u81f4\u6027\uff0c\u5426\u5219\u65e0\u6cd5\u76f8\u4e92\u8df3\u8f6c\u3002\\n   - \u9700\u8981\u4fdd\u8bc1\u951a\u70b9\uff08anchor tag\uff09\u7684\u4e00\u81f4\u6027\u3002\\n   - \u5047\u8bbe\u914d\u7f6e\u662f\u82f1\u6587\u4e3a\u4e3b\u8bed\u8a00\uff0c\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4e0d\u53ef\u4ee5\u5355\u72ec\u53d1\u8868\u4e2d\u6587\u6587\u7ae0\u3002\u5982\u679c\u8981\u5199\u4e2d\u6587\u6587\u7ae0\uff0c\u5fc5\u987b\u5148\u5b58\u5728\u7684\u82f1\u6587\u6587\u7ae0\u3002\\n   - \u4e2d\u82f1\u6587\u94fe\u63a5\u5728\u4e0d\u540c\u76ee\u5f55\uff0c\u4e14\u5c42\u7ea7\u4e0d\u540c\uff0c\u6765\u56de\u5207\u6362\u4e0d\u65b9\u4fbf\u3002\\n\\n3. \u7ffb\u8bd1\u4e0d\u662f\u4e00\u52b3\u6c38\u9038\u7684\u4e8b\u60c5\uff0c\u6bcf\u6b21\u66f4\u65b0\u67d0\u4e2a\u8bed\u8a00\u7684\u6587\u7ae0\u7684\u65f6\u5019\uff0c\u9700\u8981\u66f4\u65b0\u540c\u65f6\u4e24\u79cd\u8bed\u8a00\u3002"},{"id":"mdx/support-fontawesome","metadata":{"permalink":"/blog/mdx/support-fontawesome","source":"@site/blog/2023-12-13-mdx-support-fontawesome/index.mdx","title":"\u652f\u6301 Font Awesome","description":"\u73b0\u5728\u53ef\u4ee5\u5728 mdx \u4e2d\u4f7f\u7528 Font Awesome \u56fe\u6807\u3002","date":"2023-12-13T00:00:00.000Z","tags":[{"label":"mdx","permalink":"/blog/tags/mdx"},{"label":"font-awesome","permalink":"/blog/tags/font-awesome"},{"label":"icon","permalink":"/blog/tags/icon"}],"hasTruncateMarker":true,"authors":[{"name":"Sol","title":"\u5168\u6808\u5f00\u53d1\u8005","imageURL":"https://github.com/ShangjinTang.png","key":"sol"}],"frontMatter":{"authors":["sol"],"slug":"mdx/support-fontawesome","tags":["mdx","font-awesome","icon"]},"unlisted":false,"prevItem":{"title":"\u505c\u6b62\u56fd\u9645\u5316\u652f\u6301","permalink":"/blog/site/remove-i18n-support"},"nextItem":{"title":"\u652f\u6301\u5d4c\u5165 YouTube \u89c6\u9891","permalink":"/blog/mdx/support-youtube-link"}},"content":"\u73b0\u5728\u53ef\u4ee5\u5728 mdx \u4e2d\u4f7f\u7528 [Font Awesome \u56fe\u6807](https://fontawesome.com/search)\u3002\\n\\n\x3c!-- truncate --\x3e\\n\\n```jsx\\n<FontAwesomeIcon icon=\\"fa-brands fa-react\\" /> \u8fd9\u662f React \u56fe\u6807\u3002\\n\\n<FontAwesomeIcon icon=\\"fa-brands fa-github\\" size=\\"xl\\" /> \u8fd9\u662f\u52a0\u5927\u7684 GitHub \u56fe\u6807\u3002\\n```\\n\\n<FontAwesomeIcon icon=\\"fa-brands fa-react\\" /> \u8fd9\u662f React \u56fe\u6807\u3002\\n\\n<FontAwesomeIcon icon=\\"fa-brands fa-github\\" size=\\"xl\\" /> \u8fd9\u662f\u52a0\u5927\u7684 GitHub \u56fe\u6807\u3002\\n\\n\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u56fe\u6807\u7ee7\u627f\u5176\u7236\u5bb9\u5668\u7684\u5b57\u4f53\u5927\u5c0f\u3002 \u73b0\u4ee3\u6d4f\u89c8\u5668\u4f7f\u7528\u9ed8\u8ba4\u5b57\u4f53\u5927\u5c0f 16px\u3002\\n\\n\u8981\u66f4\u6539\u5b57\u4f53\u5927\u5c0f\uff0c\u8bf7\u5728 FontAwesomeIcon \u4e2d\u6dfb\u52a0\u4ee5\u4e0b `size` \u5c5e\u6027\uff1a\\n\\n- `2xs`: 0.625em (10px)\\n- `xs`: 0.75em (12px)\\n- `sm`: 0.875em (14px)\\n- `lg`: 1.25em (20px)\\n- `xl`: 1.5em (24px)\\n- `2xl`: 2em (32px)\\n- `1x` ~ `10x`: 1em ~ 10em"},{"id":"mdx/support-youtube-link","metadata":{"permalink":"/blog/mdx/support-youtube-link","source":"@site/blog/2023-12-10-mdx-support-youtube-link/index.mdx","title":"\u652f\u6301\u5d4c\u5165 YouTube \u89c6\u9891","description":"\u57fa\u4e8e\u7ec4\u4ef6 React Lite YouTube Embed\uff0c\u672c\u7ad9\u5df2\u652f\u6301\u5d4c\u5165 YouTube \u89c6\u9891\u3002","date":"2023-12-10T00:00:00.000Z","tags":[{"label":"mdx","permalink":"/blog/tags/mdx"},{"label":"youtube","permalink":"/blog/tags/youtube"},{"label":"video-container","permalink":"/blog/tags/video-container"}],"hasTruncateMarker":true,"authors":[{"name":"Sol","title":"\u5168\u6808\u5f00\u53d1\u8005","imageURL":"https://github.com/ShangjinTang.png","key":"sol"}],"frontMatter":{"authors":["sol"],"slug":"mdx/support-youtube-link","tags":["mdx","youtube","video-container"]},"unlisted":false,"prevItem":{"title":"\u652f\u6301 Font Awesome","permalink":"/blog/mdx/support-fontawesome"},"nextItem":{"title":"\u66f4\u6539\u9ed8\u8ba4\u5b57\u4f53","permalink":"/blog/site/change-default-fonts"}},"content":"\u57fa\u4e8e\u7ec4\u4ef6 [React Lite YouTube Embed](https://github.com/ibrahimcesar/react-lite-youtube-embed)\uff0c\u672c\u7ad9\u5df2\u652f\u6301\u5d4c\u5165 YouTube \u89c6\u9891\u3002\\n\\n\x3c!-- truncate --\x3e\\n\\n```jsx\\n<div className=\\"video-container\\">\\n  <LiteYouTubeEmbed\\n    id=\\"_An9EsKPhp0\\"\\n    params=\\"autoplay=1&autohide=1&showinfo=0&rel=0\\"\\n    title=\\"Explain Like I\'m 5: Docusaurus\\"\\n    poster=\\"maxresdefault\\"\\n    webp\\n  />\\n</div>\\n```\\n\\n<div className=\\"video-container\\">\\n  <LiteYouTubeEmbed\\n    id=\\"_An9EsKPhp0\\"\\n    params=\\"autoplay=1&autohide=1&showinfo=0&rel=0\\"\\n    title=\\"Explain Like I\'m 5: Docusaurus\\"\\n    poster=\\"maxresdefault\\"\\n    webp\\n  />\\n</div>"},{"id":"site/change-default-fonts","metadata":{"permalink":"/blog/site/change-default-fonts","source":"@site/blog/2023-12-03-site-change-default-fonts/index.mdx","title":"\u66f4\u6539\u9ed8\u8ba4\u5b57\u4f53","description":"\u672c\u7ad9\u9ed8\u8ba4\u5b57\u4f53\u73b0\u5df2\u66f4\u6539\u4e3a\uff1a","date":"2023-12-03T00:00:00.000Z","tags":[{"label":"site","permalink":"/blog/tags/site"},{"label":"font","permalink":"/blog/tags/font"}],"hasTruncateMarker":false,"authors":[{"name":"Sol","title":"\u5168\u6808\u5f00\u53d1\u8005","imageURL":"https://github.com/ShangjinTang.png","key":"sol"}],"frontMatter":{"authors":["sol"],"slug":"site/change-default-fonts","tags":["site","font"]},"unlisted":false,"prevItem":{"title":"\u652f\u6301\u5d4c\u5165 YouTube \u89c6\u9891","permalink":"/blog/mdx/support-youtube-link"},"nextItem":{"title":"\u652f\u6301 Mermaid \u56fe\u8868","permalink":"/blog/mdx/support-mermaid-diagrams"}},"content":"\u672c\u7ad9\u9ed8\u8ba4\u5b57\u4f53\u73b0\u5df2\u66f4\u6539\u4e3a\uff1a\\n\\n- `Optimistic Display`\uff08\u5bf9\u4e8e\u666e\u901a\u6587\u672c\uff09\\n- `Source Code Pro`\uff08\u7528\u4e8e\u7b49\u5bbd\u6587\u672c\uff09"},{"id":"mdx/support-mermaid-diagrams","metadata":{"permalink":"/blog/mdx/support-mermaid-diagrams","source":"@site/blog/2023-11-27-mdx-support-mermaid-diagrams/index.md","title":"\u652f\u6301 Mermaid \u56fe\u8868","description":"Mermaid \u662f\u4e00\u4e2a\u7ed8\u5236\u56fe\u8868\u7684\u5de5\u5177\u3002","date":"2023-11-27T00:00:00.000Z","tags":[{"label":"mdx","permalink":"/blog/tags/mdx"},{"label":"mermaid","permalink":"/blog/tags/mermaid"},{"label":"diagram","permalink":"/blog/tags/diagram"},{"label":"flowchart","permalink":"/blog/tags/flowchart"}],"hasTruncateMarker":true,"authors":[{"name":"Sol","title":"\u5168\u6808\u5f00\u53d1\u8005","imageURL":"https://github.com/ShangjinTang.png","key":"sol"}],"frontMatter":{"authors":["sol"],"slug":"mdx/support-mermaid-diagrams","tags":["mdx","mermaid","diagram","flowchart"]},"unlisted":false,"prevItem":{"title":"\u66f4\u6539\u9ed8\u8ba4\u5b57\u4f53","permalink":"/blog/site/change-default-fonts"},"nextItem":{"title":"\u652f\u6301\u5168\u5c40 Tabs \u548c TabItem","permalink":"/blog/mdx/support-global-tabs-tabitem"}},"content":"Mermaid \u662f\u4e00\u4e2a\u7ed8\u5236\u56fe\u8868\u7684\u5de5\u5177\u3002\\n\\n\u8bf7\u53c2\u9605 [Mermaid \u6559\u7a0b](https://mermaid.js.org/config/Tutorials.html) \u5e76\u4f7f\u7528 [Mermaid \u5b9e\u65f6\u7f16\u8f91](https://mermaid.live/) \u6765\u8fdb\u884c\u7ed8\u56fe\u3002\\n\\n\x3c!-- truncate --\x3e\\n\\n## \u5e8f\u5217\u56fe\\n\\n````md title=\\"Example Mermaid sequence diagram\\"\\n```mermaid\\ngraph TD;\\n    A--\x3eB;\\n    A--\x3eC;\\n    B--\x3eD;\\n    C--\x3eD;\\n```\\n````\\n\\n```mermaid\\nsequenceDiagram\\n    Alice->>+John: Hello John, how are you?\\n    Alice->>+John: John, can you hear me?\\n    John--\x3e>-Alice: Hi Alice, I can hear you!\\n    John--\x3e>-Alice: I feel great!\\n```\\n\\n## \u6d41\u7a0b\u56fe\\n\\n````md title=\\"Example Mermaid flowchart\\"\\n```mermaid\\nflowchart TD\\n    A[Christmas] --\x3e|Get money| B(Go shopping)\\n    B --\x3e C{Let me think}\\n    C --\x3e|One| D[Laptop]\\n    C --\x3e|Two| E[iPhone]\\n    C --\x3e|Three| F[fa:fa-car Car]\\n```\\n````\\n\\n```mermaid\\nflowchart TD\\n    A[Christmas] --\x3e|Get money| B(Go shopping)\\n    B --\x3e C{Let me think}\\n    C --\x3e|One| D[Laptop]\\n    C --\x3e|Two| E[iPhone]\\n    C --\x3e|Three| F[fa:fa-car Car]\\n```"},{"id":"mdx/support-global-tabs-tabitem","metadata":{"permalink":"/blog/mdx/support-global-tabs-tabitem","source":"@site/blog/2023-11-26-mdx-support-global-tabs-tabitem/index.md","title":"\u652f\u6301\u5168\u5c40 Tabs \u548c TabItem","description":"Docusaurus \u63d0\u4f9b\u4e86 ` \u548c ` \u7ec4\u4ef6\uff0c\u53ef\u4ee5\u901a\u8fc7 MDX \u5728 Markdown \u4e2d\u4f7f\u7528\u8be5\u7ec4\u4ef6\u3002","date":"2023-11-26T00:00:00.000Z","tags":[{"label":"mdx","permalink":"/blog/tags/mdx"},{"label":"tabs","permalink":"/blog/tags/tabs"},{"label":"tabitem","permalink":"/blog/tags/tabitem"}],"hasTruncateMarker":true,"authors":[{"name":"Sol","title":"\u5168\u6808\u5f00\u53d1\u8005","imageURL":"https://github.com/ShangjinTang.png","key":"sol"}],"frontMatter":{"authors":["sol"],"slug":"mdx/support-global-tabs-tabitem","tags":["mdx","tabs","tabitem"]},"unlisted":false,"prevItem":{"title":"\u652f\u6301 Mermaid \u56fe\u8868","permalink":"/blog/mdx/support-mermaid-diagrams"},"nextItem":{"title":"\u652f\u6301 LaTeX \u6570\u5b66\u516c\u5f0f","permalink":"/blog/mdx/support-math-latex"}},"content":"Docusaurus \u63d0\u4f9b\u4e86 `<Tabs>` \u548c `<TabItem>` \u7ec4\u4ef6\uff0c\u53ef\u4ee5\u901a\u8fc7 MDX \u5728 Markdown \u4e2d\u4f7f\u7528\u8be5\u7ec4\u4ef6\u3002\\n\\n\u6211\u4eec\u5728\u5168\u5c40\u5185\u5bf9\u5176\u8fdb\u884c\u4e86\u914d\u7f6e\uff0c\u56e0\u6b64\u8be5\u529f\u80fd\u53ef\u5728\u672c\u7ad9\u4efb\u4f55\u9875\u9762\u4f7f\u7528\u3002\\n\\n\x3c!-- truncate --\x3e\\n\\n```jsx\\n<Tabs>\\n  <TabItem value=\\"apple\\" label=\\"Apple\\" default>\\n    This is an apple \ud83c\udf4e\\n  </TabItem>\\n  <TabItem value=\\"orange\\" label=\\"Orange\\">\\n    This is an orange \ud83c\udf4a\\n  </TabItem>\\n  <TabItem value=\\"banana\\" label=\\"Banana\\">\\n    This is a banana \ud83c\udf4c\\n  </TabItem>\\n</Tabs>\\n```\\n\\n<Tabs>\\n  <TabItem value=\\"apple\\" label=\\"Apple\\" default>\\n    This is an apple \ud83c\udf4e\\n  </TabItem>\\n  <TabItem value=\\"orange\\" label=\\"Orange\\">\\n    This is an orange \ud83c\udf4a\\n  </TabItem>\\n  <TabItem value=\\"banana\\" label=\\"Banana\\">\\n    This is a banana \ud83c\udf4c\\n  </TabItem>\\n</Tabs>"},{"id":"mdx/support-math-latex","metadata":{"permalink":"/blog/mdx/support-math-latex","source":"@site/blog/2023-11-24-mdx-support-math-latex/index.md","title":"\u652f\u6301 LaTeX \u6570\u5b66\u516c\u5f0f","description":"\u6570\u5b66\u516c\u5f0f\u53ef\u4ee5\u4f7f\u7528 KaTeX \u6e32\u67d3\uff0c\u76ee\u524d\u672c\u7ad9\u5df2\u7ecf\u652f\u6301\u3002","date":"2023-11-24T00:00:00.000Z","tags":[{"label":"mdx","permalink":"/blog/tags/mdx"},{"label":"math","permalink":"/blog/tags/math"},{"label":"latex","permalink":"/blog/tags/latex"},{"label":"katex","permalink":"/blog/tags/katex"}],"hasTruncateMarker":true,"authors":[{"name":"Sol","title":"\u5168\u6808\u5f00\u53d1\u8005","imageURL":"https://github.com/ShangjinTang.png","key":"sol"}],"frontMatter":{"authors":["sol"],"slug":"mdx/support-math-latex","tags":["mdx","math","latex","katex"]},"unlisted":false,"prevItem":{"title":"\u652f\u6301\u5168\u5c40 Tabs \u548c TabItem","permalink":"/blog/mdx/support-global-tabs-tabitem"},"nextItem":{"title":"React \u652f\u6301","permalink":"/blog/mdx/react-support"}},"content":"\u6570\u5b66\u516c\u5f0f\u53ef\u4ee5\u4f7f\u7528 [KaTeX](https://katex.org) \u6e32\u67d3\uff0c\u76ee\u524d\u672c\u7ad9\u5df2\u7ecf\u652f\u6301\u3002\\n\\n\x3c!--truncate--\x3e\\n\\n## \u7528\u6cd5 {#usage}\\n\\n\u8bf7\u9605\u8bfb [KaTeX](https://katex.org) \u6587\u6863\u4e86\u89e3\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\u3002\\n\\n### \u884c\u5185\u516c\u5f0f {#inline}\\n\\n\u5bf9\u4e8e\u884c\u5185\u6570\u5b66\u516c\u5f0f\uff0c\u5c06 LaTeX \u5305\u88f9\u5728 `$` \u4e4b\u95f4\uff1a\\n\\n```latex\\n\u5047\u8bbe $f\\\\colon[a,b]\\\\to\\\\R$ \u662f\u9ece\u66fc\u53ef\u79ef\u7684\uff0c \u5b9a\u4e49 $F\\\\colon[a,b]\\\\to\\\\R$ \u4e3a $F(x)=\\\\int_{a}^{x} f(t)\\\\,dt$\u3002 \u90a3\u4e48\uff0c $F$ \u662f\u8fde\u7eed\u7684\uff1b\u5e76\u4e14 $x$ \u5728 $f$ \u5728 $x$ \u5904\u8fde\u7eed\uff1b$F$ \u5728 $x$ \u5904\u53ef\u5fae\uff0c\u4e14 $F\'(x)=f(x)$\u3002\\n```\\n\\n\u5047\u8bbe $f\\\\colon[a,b]\\\\to\\\\R$ \u662f\u9ece\u66fc\u53ef\u79ef\u7684\uff0c \u5b9a\u4e49 $F\\\\colon[a,b]\\\\to\\\\R$ \u4e3a $F(x)=\\\\int_{a}^{x} f(t)\\\\,dt$\u3002 \u90a3\u4e48\uff0c $F$ \u662f\u8fde\u7eed\u7684\uff1b\u5e76\u4e14 $x$ \u5728 $f$ \u5728 $x$ \u5904\u8fde\u7eed\uff1b$F$ \u5728 $x$ \u5904\u53ef\u5fae\uff0c\u4e14 $F\'(x)=f(x)$\u3002\\n\\n### \u516c\u5f0f\u5757 {#blocks}\\n\\n\u5bf9\u4e8e\u516c\u5f0f\u5757\uff0c\u4f7f\u7528\u6362\u884c\u7b26\u548c `$$` \u9694\u5f00 \uff1a\\n\\n```latex\\n$$\\nI = \\\\int_0^{2\\\\pi} \\\\sin(x)\\\\,dx\\n$$\\n```\\n\\n$$\\nI = \\\\int_0^{2\\\\pi} \\\\sin(x)\\\\,dx\\n$$"},{"id":"mdx/react-support","metadata":{"permalink":"/blog/mdx/react-support","source":"@site/blog/2023-11-23-mdx-react-support/index.mdx","title":"React \u652f\u6301","description":"\u535a\u5ba2\u6587\u7ae0\u652f\u6301 Docusaurus Markdown \u529f\u80fd\uff0c\u4f8b\u5982 MDX\u3002","date":"2023-11-23T00:00:00.000Z","tags":[{"label":"mdx","permalink":"/blog/tags/mdx"},{"label":"react","permalink":"/blog/tags/react"}],"hasTruncateMarker":true,"authors":[{"name":"Sol","title":"\u5168\u6808\u5f00\u53d1\u8005","imageURL":"https://github.com/ShangjinTang.png","key":"sol"}],"frontMatter":{"authors":["sol"],"slug":"mdx/react-support","tags":["mdx","react"]},"unlisted":false,"prevItem":{"title":"\u652f\u6301 LaTeX \u6570\u5b66\u516c\u5f0f","permalink":"/blog/mdx/support-math-latex"},"nextItem":{"title":"\u6b22\u8fce","permalink":"/blog/welcome"}},"content":"\u535a\u5ba2\u6587\u7ae0\u652f\u6301 [Docusaurus Markdown \u529f\u80fd](https://docusaurus.io/docs/markdown-features)\uff0c\u4f8b\u5982 [MDX](https://mdxjs.com/)\u3002\\n\\n\x3c!--truncate--\x3e\\n\\n## \u4ea4\u4e92\u5f0f {#interactive}\\n\\n:::tip\\n\\n\u4f7f\u7528 React \u7684\u5f3a\u5927\u529f\u80fd\u6765\u521b\u5efa\u4ea4\u4e92\u5f0f\u535a\u5ba2\u6587\u7ae0\u3002\\n\\n```js\\n<button onClick={() => alert(\'\u6309\u94ae\u88ab\u70b9\u51fb\u4e86!\')}>\u70b9\u51fb\u8fd9\u91cc\uff01</button>\\n```\\n\\n<button onClick={() => alert(\'\u6309\u94ae\u88ab\u70b9\u51fb\u4e86!\')}>\u70b9\u51fb\u8fd9\u91cc\uff01</button>\\n\\n:::\\n\\n## \u56fe\u8868\u5f0f {#diagram}\\n\\n:::tip\\n\\n\u4f7f\u7528 React \u7684\u5f3a\u5927\u529f\u80fd\u6765\u521b\u5efa\u56fe\u8868\u3002\\n\\n```mdx\\nimport {Chart} from \'./_asset/snowfall.js\';\\nexport const year = 2013;\\n\\n# \u53bb\u5e74\u964d\u96ea\\n\\n{year} \u5e74\u7684\u964d\u96ea\u91cf\u9ad8\u4e8e\u5e73\u5747\u6c34\u5e73\u3002 \u968f\u4e4b\u800c\u6765\u7684\u6696\u6625\uff0c\u5bfc\u81f4\u9644\u8fd1\u8bb8\u591a\u6cb3\u6d41\u53d1\u751f\u6d2a\u6c34\u3002\\n\\n<Chart year={year} color=\\"#fcb32c\\" />;\\n```\\n\\nimport {Chart} from \'./_asset/snowfall.js\';\\nexport const year = 2013;\\n\\n<h1>\u53bb\u5e74\u964d\u96ea</h1>\\n<p>{year} \u5e74\u7684\u964d\u96ea\u91cf\u9ad8\u4e8e\u5e73\u5747\u6c34\u5e73\u3002 \u968f\u4e4b\u800c\u6765\u7684\u6696\u6625\uff0c\u5bfc\u81f4\u9644\u8fd1\u8bb8\u591a\u6cb3\u6d41\u53d1\u751f\u6d2a\u6c34\u3002</p>\\n<Chart year={year} color=\\"#fcb32c\\" />\\n\\n:::"},{"id":"welcome","metadata":{"permalink":"/blog/welcome","source":"@site/blog/2019-05-28-welcome/index.md","title":"\u6b22\u8fce","description":"Docusaurus \u535a\u5ba2\u529f\u80fd \u7531 blog \u63d2\u4ef6 \u63d0\u4f9b\u652f\u6301\u3002","date":"2019-05-28T00:00:00.000Z","tags":[{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"hasTruncateMarker":true,"authors":[{"name":"Sol","title":"\u5168\u6808\u5f00\u53d1\u8005","imageURL":"https://github.com/ShangjinTang.png","key":"sol"}],"frontMatter":{"slug":"welcome","authors":["sol"],"tags":["docusaurus"]},"unlisted":false,"prevItem":{"title":"React \u652f\u6301","permalink":"/blog/mdx/react-support"}},"content":"[Docusaurus \u535a\u5ba2\u529f\u80fd](https://docusaurus.io/docs/blog) \u7531 [blog \u63d2\u4ef6](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog) \u63d0\u4f9b\u652f\u6301\u3002\\n\\n\u4f7f\u7528 `\x3c!--` `truncate` `--\x3e` \u6ce8\u91ca\u6765\u9650\u5236\u535a\u5ba2\u9884\u89c8\u3002\\n\\n\x3c!--truncate--\x3e\\n\\n\u53ea\u9700\u8981\u5c06 Markdown \u6587\u4ef6\uff08\u6216\u6587\u4ef6\u5939\uff09\u6dfb\u52a0\u5230 `blog` \u76ee\u5f55\u5373\u53ef\u3002\\n\\n\u5e38\u7528\u7684\u535a\u5ba2\u4f5c\u8005\u53ef\u4ee5\u6dfb\u52a0\u5230 `authors.yml` \u4e2d\u3002\\n\\n\u53ef\u4ee5\u4ece\u6587\u4ef6\u540d\u4e2d\u63d0\u53d6\u535a\u5ba2\u6587\u7ae0\u65e5\u671f\uff0c\u4f8b\u5982\uff1a\\n\\n- `2019-05-30-welcome.md`\\n- `2019-05-30-welcome/index.md`\\n\\n\u5199\u535a\u5ba2\u65f6\uff0c\u53ef\u4ee5\u65b9\u4fbf\u5730\u5728\u540c\u7ea7\u6587\u4ef6\u5939\u5185\u5f15\u7528\u56fe\u50cf\uff1a\\n\\n![Docusaurus \u6bdb\u7ed2\u73a9\u5177](./docusaurus-plushie-banner.jpeg)\\n\\n\u535a\u5ba2\u4e5f\u652f\u6301\u6807\u7b7e\uff01\\n\\n**\u5982\u679c\u4e0d\u9700\u8981\u535a\u5ba2**\uff1a\u5220\u9664\u6b64\u76ee\u5f55\uff0c\u5e76\u5728 Docusaurus \u914d\u7f6e\u4e2d\u4f7f\u7528 `blog: false` \u5373\u53ef\u3002"}]}}')}}]);
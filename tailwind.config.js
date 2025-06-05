/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html', // 현재 폴더의 모든 HTML 파일 (예: index.html)
    './**/*.html', // 하위 폴더의 모든 HTML 파일
    './src/**/*.{js,ts,jsx,tsx}', // React, Vue 등 프레임워크를 사용한다면 해당 JS/TS 파일
    './src/input.css',
    './src/components.css',
    'node_modules/preline/dist/*.js', // ✨ 이 부분이 중요: Preline의 JS 파일 경로 ✨
  ],
  theme: {
    
            fontFamily: {
                sans: ['NanumSquareNeo','"Noto Sans KR"','ui-sans-serif','system-ui', '-apple-system', 'BlinkMacSystemFont','"Segoe UI"', '"Helvetica Neue"',
                    'Arial','sans-serif', '"Apple Color Emoji"','"Segoe UI Emoji"', '"Segoe UI Symbol"','"Noto Color Emoji"'],
                serif: ['Merriweather','Georgia', 'serif'],
            },
            screens: {
                xs: '300px',
                sm: '550px',
                md: '1090px',
                lg: '1240px',
                xl: '1440px',

                // 뷰포트 높이가 1080px 이하일 때 적용 (max-height)
            
                'custom-breakpoint': { 'raw': '(max-width: 1710px) or (max-height: 800px)' },
            },
            extend : {
                colors: {
                    blue: {
                        '100' : "#3069b2",
                        '200' : "#4277bc",
                        '300' : "#6aa7da",
                        '400' : "#85d5f7",
                    },
                    green : {
                        '100' : "#00af9d",
                        '200' : "#38bca7",
                        '300' : "#83cec4",
                        '400' : "#3cbeb7",
                    },
                    gray : {
                        '100' : "#0b0506",
                        '200' : "#231f20",
                        '300' : "#666666",
                        '400' : "#87898c",
                        '500' : "#898a90",
                        '600' : "#cccccc",
                        '700' : "#eff2f4",
                        '800' : "#efefef",
                        '900' : "#f6f6fb",
                    },
                    red : {
                        '100' : "#e76971"
                    },
                },
                fontSize: {
                    'h1': '20px',
                    'h2' : '18px',
                    'h6' : '16px',
                    'body' : '14px',
                    'caption' : '12px',
                    'button' : ['12px', {fontWeight:'bold'}],
                    'small' : '10px',
                },
                aspectRatio: {
                  '4/3' : '4 / 3',
                  '21/9': '21 / 9',
                  'golden': '1.618',
                  'retro': '4 / 5',
                  'square': '1 / 1'
                },
                container : {
                  '4xs' : '14rem',
                }
            },
        },
  plugins: [
  require('@tailwindcss/forms'),
  ],
};



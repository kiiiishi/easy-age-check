import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Check, AlertTriangle } from 'lucide-react';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'verification' | 'confirmed' | 'underage'>('verification');
  const [countdown, setCountdown] = useState(5);
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    // ページ読み込み時に年齢確認済みかチェック
    const isVerified = localStorage.getItem('ageVerified');
    const verifiedAt = localStorage.getItem('ageVerifiedAt');
    
    if (isVerified && verifiedAt) {
      const verifiedDate = new Date(verifiedAt);
      const now = new Date();
      const hoursDiff = (now.getTime() - verifiedDate.getTime()) / (1000 * 60 * 60);
      
      // 24時間以内の場合は年齢確認をスキップ
      if (hoursDiff < 24) {
        setCurrentScreen('confirmed');
        setCountdown(5);
      }
    }
  }, []);

  useEffect(() => {
    if (currentScreen === 'confirmed') {
      // Set current date in Asia/Tokyo timezone
      const now = new Date();
      const tokyoDate = new Date(now.toLocaleString("en-US", {timeZone: "Asia/Tokyo"}));
      const formattedDate = `${tokyoDate.getFullYear()}/${String(tokyoDate.getMonth() + 1).padStart(2, '0')}/${String(tokyoDate.getDate()).padStart(2, '0')}`;
      setCurrentDate(formattedDate);

      // Start countdown
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            // 年齢確認完了後、メインページにリダイレクト（実際のアプリケーションでは適切なURLに変更）
            // window.location.href = '/main';
            setCurrentScreen('verification');
            setCountdown(5); // Reset countdown for next time
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [currentScreen]);

  const handleAgeConfirmation = (isAdult: boolean) => {
    if (isAdult) {
      // 年齢確認が完了したことを示すフラグを設定
      localStorage.setItem('ageVerified', 'true');
      localStorage.setItem('ageVerifiedAt', new Date().toISOString());
      setCurrentScreen('confirmed');
      setCountdown(5);
    } else {
      setCurrentScreen('underage');
    }
  };

  const handleGoBack = () => {
    setCurrentScreen('verification');
    setCountdown(5);
  };

  if (currentScreen === 'verification') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center p-4 sm:p-6">
        <div className="w-11/12 sm:w-4/5 max-w-4xl bg-white rounded-3xl shadow-2xl p-8 sm:p-16 text-center space-y-8 sm:space-y-20">
          <div className="space-y-4 sm:space-y-10">
            <div className="text-6xl sm:text-8xl mb-4 sm:mb-8">🔞</div>
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-800 leading-tight px-4">
              <span className="block sm:inline">あなたは</span>
              <span className="block sm:inline">18歳以上ですか？</span>
            </h1>
          </div>
          
          <div className="space-y-6 sm:space-y-12">
            <Button 
              onClick={() => handleAgeConfirmation(true)}
              className="w-5/6 sm:w-3/4 py-16 sm:py-24 text-2xl sm:text-4xl bg-green-600 hover:bg-green-700 text-white font-bold rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              size="lg"
            >
              はい
            </Button>
            
            <div className="space-y-4 sm:space-y-6">
              <button 
                onClick={() => handleAgeConfirmation(false)}
                className="text-lg sm:text-2xl text-red-600 hover:text-red-700 underline underline-offset-4 transition-colors duration-300 cursor-pointer"
              >
                いいえ
              </button>
            </div>
            
            <p className="text-sm sm:text-lg text-gray-500 mt-6 sm:mt-8 px-4">
              身分証明書のご提示をお願いする場合があります
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (currentScreen === 'underage') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-500 via-pink-500 to-red-600 flex items-center justify-center p-4 sm:p-6">
        <div className="w-11/12 sm:w-4/5 max-w-4xl bg-white rounded-3xl shadow-2xl p-8 sm:p-16 text-center space-y-8 sm:space-y-20">
          <div className="flex justify-center">
            <div className="w-24 sm:w-32 h-24 sm:h-32 rounded-full bg-red-500 flex items-center justify-center">
              <AlertTriangle className="w-12 sm:w-16 h-12 sm:h-16 text-white" strokeWidth={3} />
            </div>
          </div>
          
          <div className="space-y-4 sm:space-y-8">
            <h1 className="text-3xl sm:text-5xl font-bold text-gray-800">
              アクセスできません
            </h1>
            
            <p className="text-lg sm:text-2xl text-gray-600 leading-relaxed">
              申し訳ございませんが、18歳未満の方はこのコンテンツにアクセスできません。
            </p>
            
            <p className="text-base sm:text-lg text-gray-500">
              年齢制限は法律に基づいて設定されています。
            </p>
          </div>
          
          <Button 
            onClick={handleGoBack}
            variant="outline"
            className="w-2/3 sm:w-1/2 py-4 sm:py-6 text-lg sm:text-xl border-gray-300 text-gray-600 hover:bg-gray-50 font-semibold rounded-xl transition-all duration-300"
          >
            戻る
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500 via-emerald-500 to-green-600 flex items-center justify-center p-4 sm:p-6">
      <div className="w-11/12 sm:w-4/5 max-w-4xl bg-white rounded-3xl shadow-2xl p-8 sm:p-16 text-center space-y-8 sm:space-y-20">
        <div className="flex justify-center">
          <div className="w-24 sm:w-32 h-24 sm:h-32 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
            <Check className="w-12 sm:w-16 h-12 sm:h-16 text-white" strokeWidth={3} />
          </div>
        </div>
        
        <div className="space-y-4 sm:space-y-8">
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-800">
            年齢の確認が完了しました
          </h1>
          
          <p className="text-lg sm:text-2xl font-medium text-gray-700">
            {currentDate}
          </p>
          
          <p className="text-base sm:text-xl text-gray-600">
            あと{countdown}秒でメインページに進みます
          </p>
        </div>
        
        <Button 
          onClick={handleGoBack}
          variant="outline"
          className="w-2/3 sm:w-1/2 py-4 sm:py-6 text-lg sm:text-xl border-gray-300 text-gray-600 hover:bg-gray-50 font-semibold rounded-xl transition-all duration-300"
        >
          戻る
        </Button>
      </div>
    </div>
  );
}

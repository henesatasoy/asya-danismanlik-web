import { useEffect, useState } from 'react';
import { removeBackground, loadImageFromUrl } from '@/utils/backgroundRemoval';
import { useToast } from '@/hooks/use-toast';

const BackgroundRemovalProcessor = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [processedImageUrl, setProcessedImageUrl] = useState<string | null>(null);
  const { toast } = useToast();

  const processLogo = async () => {
    if (isProcessing) return;
    
    setIsProcessing(true);
    try {
      toast({
        title: "Arka plan kaldırılıyor...",
        description: "Logo işleniyor, lütfen bekleyin.",
      });

      // Load the current logo
      const logoImage = await loadImageFromUrl('/lovable-uploads/833b85de-a743-435b-9409-48d1da99f7fe.png');
      
      // Remove background
      const processedBlob = await removeBackground(logoImage);
      
      // Create URL for the processed image
      const processedUrl = URL.createObjectURL(processedBlob);
      setProcessedImageUrl(processedUrl);
      
      toast({
        title: "Başarılı!",
        description: "Logo arka planı başarıyla kaldırıldı.",
      });
      
    } catch (error) {
      console.error('Error processing logo:', error);
      toast({
        title: "Hata",
        description: "Logo işlenirken bir hata oluştu.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  useEffect(() => {
    // Automatically start processing when component mounts
    processLogo();
  }, []);

  return (
    <div className="fixed top-4 right-4 bg-background/95 backdrop-blur-sm p-4 rounded-lg shadow-lg border z-50">
      <div className="flex items-center space-x-4">
        <div className="text-sm">
          {isProcessing ? (
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-gold border-t-transparent rounded-full animate-spin"></div>
              <span>Logo işleniyor...</span>
            </div>
          ) : processedImageUrl ? (
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span>Logo hazır!</span>
            </div>
          ) : (
            <span>Logo işlenecek</span>
          )}
        </div>
        {processedImageUrl && (
          <div className="flex items-center space-x-2">
            <img 
              src={processedImageUrl} 
              alt="Processed Logo" 
              className="h-8 w-auto" 
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default BackgroundRemovalProcessor;
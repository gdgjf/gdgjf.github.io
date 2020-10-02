import html2canvas from 'html2canvas';

export function DownloadElement(ref: HTMLElement, frameName?: string){
  html2canvas(ref, { 
    logging: true, 
    allowTaint: true,
    useCORS: true, 
    // proxy: process.env.REACT_APP_PROXY_URL!, 
    scale: window.innerWidth < 660 ? 2 : 1,
    scrollY: -window.scrollY
  }).then((canvas:any) => {
    let a = document.createElement('a');
    a.href=canvas.toDataURL("image/png");
    a.download = `moldura-${frameName}.png`
    a.click();
  })
}
import html2canvas from 'html2canvas';

export function DownloadElement(ref: HTMLElement, frameName?: string){
  document.documentElement.classList.add('hide-scrollbar');
  html2canvas(ref, { 
    logging: true, 
    allowTaint: true,
    useCORS: true, 
    scale: window.innerWidth < 660 ? 2 : 1,
    scrollY: -window.scrollY,
    scrollX: -window.scrollX
  }).then((canvas:any) => {
    let a = document.createElement('a');
    a.href=canvas.toDataURL("image/png");
    a.download = `moldura-${frameName}.png`
    a.click();
  })
  document.documentElement.classList.remove('hide-scrollbar');
}
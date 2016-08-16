export function hideClass(className : string) {
    let cl = document.getElementsByClassName(className);
    Array.from(cl).forEach(el => {
      (el as HTMLElement).style.display = 'none';
    })
}
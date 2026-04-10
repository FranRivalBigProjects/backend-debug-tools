const res=document.getElementById('res');
function run(){
  const txt=(document.getElementById('input').value||'').toLowerCase();
  const val=(document.getElementById('value').value||'').toLowerCase();
  let out = 'Analysis:\n';
  if(txt.includes('500')||val.includes('500')) out += '- Server error: check logs, app crash, upstream.\n';
  if(txt.includes('403')||val.includes('403')) out += '- Forbidden: auth/permissions, firewall, CORS.\n';
  if(txt.includes('json')||txt.includes('parse')) out += '- JSON parse: invalid syntax, trailing commas, wrong content-type.\n';
  if(txt.includes('timeout')||txt.includes('timed out')) out += '- Timeout: slow upstream, network, increase timeout/retry.\n';
  if(txt.includes('header')||txt.includes('content-type')) out += '- Header mismatch: content-type/cors/encoding issues.\n';
  if(out==='Analysis:\n') out += '- General backend issue: inspect logs, headers, status codes.\n';
  res.innerText = out;
}
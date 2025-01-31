const   NewUtcTime =document.getElementById("utc-time")

function updateTime() {
            const utcTime = new Date().toUTCString().replace("GMT", "UTC");
            NewUtcTime.textContent = utcTime;
        }
        updateTime();
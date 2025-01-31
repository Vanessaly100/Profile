function updateTime() {
            const utcTime = new Date().toUTCString().replace("GMT", "UTC");
            document.getElementById("utc-time").textContent = utcTime;
        }
        updateTime();
<template>
    <div class="logo">
        <svg class="sheet sheet-3" viewBox="0 0 45 61" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M42.7 59H1.70001V2H28.6L42.7 17.1V59Z" fill="white" stroke="#020202" stroke-width="3" stroke-miterlimit="10"/>
            <path d="M28.7 2V17H42.7" stroke="#020202" stroke-width="3" stroke-miterlimit="10"/>
            <path d="M32.2 30H12.2" stroke="#020202" stroke-width="3" stroke-miterlimit="10"/>
            <path d="M32.2 37H12.2" stroke="#020202" stroke-width="3" stroke-miterlimit="10"/>
            <path d="M32.2 44H12.2" stroke="#020202" stroke-width="3" stroke-miterlimit="10"/>
        </svg>
        <svg class="sheet sheet-2" viewBox="0 0 45 61" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M42.7 59H1.70001V2H28.6L42.7 17.1V59Z" fill="white" stroke="#020202" stroke-width="3" stroke-miterlimit="10"/>
            <path d="M28.7 2V17H42.7" stroke="#020202" stroke-width="3" stroke-miterlimit="10"/>
            <path d="M32.2 30H12.2" stroke="#020202" stroke-width="3" stroke-miterlimit="10"/>
            <path d="M32.2 37H12.2" stroke="#020202" stroke-width="3" stroke-miterlimit="10"/>
            <path d="M32.2 44H12.2" stroke="#020202" stroke-width="3" stroke-miterlimit="10"/>
        </svg>
        <svg class="sheet sheet-1" viewBox="0 0 45 61" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M42.7 59H1.70001V2H28.6L42.7 17.1V59Z" fill="white" stroke="#020202" stroke-width="3" stroke-miterlimit="10"/>
            <path d="M28.7 2V17H42.7" stroke="#020202" stroke-width="3" stroke-miterlimit="10"/>
            <path d="M32.2 30H12.2" stroke="#020202" stroke-width="3" stroke-miterlimit="10"/>
            <path d="M32.2 37H12.2" stroke="#020202" stroke-width="3" stroke-miterlimit="10"/>
            <path d="M32.2 44H12.2" stroke="#020202" stroke-width="3" stroke-miterlimit="10"/>
        </svg>
        <svg class="tick" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.8 33.2998C25.9127 33.2998 33.3 25.9125 33.3 16.7998C33.3 7.68711 25.9127 0.299805 16.8 0.299805C7.68729 0.299805 0.299988 7.68711 0.299988 16.7998C0.299988 25.9125 7.68729 33.2998 16.8 33.2998Z" fill="white"/>
            <path d="M16.8 29.2998C23.7035 29.2998 29.3 23.7034 29.3 16.7998C29.3 9.89625 23.7035 4.2998 16.8 4.2998C9.89643 4.2998 4.29999 9.89625 4.29999 16.7998C4.29999 23.7034 9.89643 29.2998 16.8 29.2998Z" stroke="#95C23D" stroke-width="3" stroke-miterlimit="10"/>
            <path d="M11.3 16.2998L15.3 20.2998L22.8 12.7998" stroke="#95C23D" stroke-width="3" stroke-miterlimit="10"/>
        </svg>
        <svg class="line" viewBox="0 0 101 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.200012 2H100.2" stroke="#020202" stroke-width="3" stroke-miterlimit="10"/>
        </svg>
    </div>
</template>

<style lang="scss" scoped>
.logo {
    width: 10rem;
    height: 6rem;
    position: relative;
    overflow: hidden;
    svg {
        position: absolute;    
    }
    .line {
        bottom: -.1rem;
        animation: line .4s ease-in-out forwards;
    }
    .sheet {
        max-height: 100%;
        bottom: 0;
        transform: translateX(-50%);
    }
    .sheet-1 {
        left: 50%;
        bottom: -10rem;
        animation: sheet-1 .4s ease-in-out forwards;
        animation-delay: 0.3s;
    }
    .sheet-2 {
        left: 42%;
        bottom: -18rem;
        animation: sheet-2 .4s ease-in-out forwards;
        animation-delay: 0.6s;
    }
    .sheet-3 {
        left: 36%;
        bottom: -26rem;
        animation: sheet-3 .4s ease-in-out forwards;
        animation-delay: 0.9s;
    }
    .tick {
        width: 0%;
        right: 1rem;
        top: 1.4rem;
        animation: tick .4s ease-in-out forwards;
        animation-delay: 1.2s;
    }
}

@keyframes line {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
@keyframes sheet-1 {
  0% {
    bottom: -10rem;
  }
  100% {
    bottom: 0;
  }
}
@keyframes sheet-2 {
  0% {
    bottom: -18rem;
  }
  100% {
    bottom: -.8rem;
  }
}
@keyframes sheet-3 {
  0% {
    bottom: -26rem;
  }
  100% {
    bottom: -1.6rem;
  }
}
@keyframes tick {
  0% {
    width: 0%;
    transform: rotate(900deg);
  }
  100% {
    width: 40%;
    transform: rotate(0);
  }
}
</style>
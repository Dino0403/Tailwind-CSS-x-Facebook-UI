import { doc } from "prettier";
import "./index.css";

// ------ panel 相關 -----------
const plusBtn = document.getElementById('plus-btn')
const msgBtn = document.getElementById('msg-btn')
const notificationBtn = document.getElementById('notification-btn')
const moreBtn = document.getElementById('more-btn')

const plusPanel = document.getElementById('plus-panel')
const msgPanel = document.getElementById('msg-panel')
const notificationPanel = document.getElementById('notification-panel')
const morePanel = document.getElementById('more-panel')

const panels = [plusPanel, msgPanel, notificationPanel, morePanel]

function openPanel(index) {
  panels.forEach((p, idx) => {
    if (index === idx) {
      p.classList.remove('hidden')
      return
    }

    if (p.classList.contains('hidden')) {
      return
    }

    p.classList.add('hidden')
  })
}

window.addEventListener('click', function () {
  console.log('window')
  openPanel(-1)
})

plusBtn.addEventListener('click', function (e) {
  e.stopPropagation()
  openPanel(0)
})

msgBtn.addEventListener('click', function (e) {
  e.stopPropagation()
  openPanel(1)
})

notificationBtn.addEventListener('click', function (e) {
  e.stopPropagation()
  openPanel(2)
})

moreBtn.addEventListener('click', function (e) {
  e.stopPropagation()
  openPanel(3)
})


plusPanel.addEventListener('click', function (e) {
  e.stopPropagation()
})

msgPanel.addEventListener('click', function (e) {
  e.stopPropagation()
})


notificationPanel.addEventListener('click', function (e) {
  e.stopPropagation()
})


morePanel.addEventListener('click', function (e) {
  e.stopPropagation()
})


// ------ 左側 相關 -----------
const leftBlock = document.getElementById('leftBlock')

function renderLeftItem(name, imageURL) {
  const item = `
    <div class="flex items-center justify-items-center w-full p-2 mb-1 rounded hover:bg-fb-input cursor-pointer">
      <div>
        <img src="${imageURL}" class="w-[32px] rounded-full overflow-hidden mr-4">
      </div>
      <p class="text-white text-[.9rem]">${name}</p>
    </div>
  `
  return item
}

function renderLeftBlock() {
  const itemsArr = [
    {
      name: 'Dino',
      image: 'https://bruce-fe-fb.web.app/image/avator.png',
    },
    {
      name: '活動',
      image: 'https://bruce-fe-fb.web.app/image/left/activity.svg',
    },
    {
      name: '天氣',
      image: 'https://bruce-fe-fb.web.app/image/left/cloudy.png',
    },
    {
      name: '災害應變中心',
      image: 'https://bruce-fe-fb.web.app/image/left/dynamic.svg',
    },
    {
      name: '新冠病毒資訊中心',
      image: 'https://bruce-fe-fb.web.app/image/left/facemask.svg',
    },
    {
      name: '社團',
      image: 'https://bruce-fe-fb.web.app/image/left/friend.svg',
    },
    {
      name: '企業管理平台',
      image: 'https://bruce-fe-fb.web.app/image/left/job.png',
    },
    {
      name: 'Message',
      image: 'https://bruce-fe-fb.web.app/image/left/messenger.svg',
    },
    {
      name: '近期廣告動態',
      image: 'https://bruce-fe-fb.web.app/image/left/pay.png',
    },
    {
      name: '朋友名單',
      image: 'https://bruce-fe-fb.web.app/image/left/sale.png',
    },
    {
      name: '最愛',
      image: 'https://bruce-fe-fb.web.app/image/left/star.svg',
    },
    {
      name: 'Marketplace',
      image: 'https://bruce-fe-fb.web.app/image/left/store.svg',
    },
    {
      name: 'Watch',
      image: 'https://bruce-fe-fb.web.app/image/left/watchingTv.svg',
    }
  ]

  let html = ''
  itemsArr.forEach(item => {
    html = html + renderLeftItem(item.name, item.image)
  })
  leftBlock.innerHTML = html
}

renderLeftBlock()

// ------ 右側 相關 -----------
const friendsList = ['Dean', 'Shawn', 'Cole', 'Evan', 'Ryan', 'Kaleb', 'Sherry', 'Eve', 'Ruby']
const rightBlock = document.getElementById('rightBlock')

function renderFriend(name) {
  const friendIten = `
    <div class="flex items-center justify-items-center w-full py-2 px-1 rounded hover:bg-fb-input cursor-pointer">
      <div class="w-[45px]">
        <div class="w-[32px] relative cursor-pointer">
          <div class="overflow-hidden rounded-full">
            <img src="https://bruce-fe-fb.web.app/image/avator.png" alt="">
          </div>
        <div class="w-[8px] h-[8px] rounded-full bg-green-400 absolute right-0 bottom-0 ring-gray-900 ring"></div>
        </div>
      </div>
      <p class="text-white text-[0.9rem]">${name}</p>
    </div>
  `
  return friendIten
}

function renderRightBlock() {
  let html = '<p class="text-gray-400 mb-2 text-lg">聯絡人</p>'
  friendsList.forEach(friend => {
    html = html + renderFriend(friend)
  })
  console.log(html)
  rightBlock.innerHTML = html
}

renderRightBlock()

// 限時動態相關
const dynamicList = [
  {
    name: 'Dean',
    imgURL: 'https://cloudfront.zekkei-japan.jp/free/wallpaper/wp_06_09_sp_04.jpg'
  },
  {
    name: 'Shawn',
    imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSftQUYaL4vNbo2ou-7m8tATVtZZNJvLyWs_UT1nlLCa9p71DyzB_JfXGrq-J9erTm5kks&usqp=CAU'
  },
  {
    name: 'Cole',
    imgURL: 'https://www.popdaily.com.tw/u/202005/2388c3e8-d4ec-4cb0-8788-0f998eb645c2.jpg'
  },
  {
    name: 'Evan',
    imgURL: 'https://i.imgur.com/9zKCF1C.jpg'
  },
]

const storyList = document.getElementById('story-list')

function renderDymanic() {
  dynamicList.forEach((item, index) => {
    const divBox = document.createElement('div')
    divBox.classList.add('flex-1', 'min-w-[120px]', 'px-[4px]', 'cursor-pointer')
    divBox.innerHTML = `
      <div class="relative overflow-hidden" id="story-${index}">
        <div id="story-mask-${index}" class="hidden absolute h-full w-full top-0 left-0 bg-black/20"></div>
        <div
          class="w-[32px] h-[32px] ring-4 ring-fb bg-fb-card rounded-full flex items-center justify-center absolute top-4 left-4 z-10">
          <p class="text-white text-sm">${item.name[0]}</p>
        </div>
        <div class="absolute h-full w-full top-0 left-0 bg-gradient-to-b from-black/30 to-transparent z-20"></div>
        <img src="${item.imgURL}" id="story-image-${index}"
                  class="h-full w-full object-cover hover:scale-105 duration-500">
        <p class="text-white absolute bottom-2 left-2 z-10">${item.name}</p>
      </div>
  `
    divBox.addEventListener('mousemove', function () {
      const mask = document.getElementById(`story-mask-${index}`)
      const image = document.getElementById(`story-image-${index}`)
      mask.classList.remove('hidden')
      image.classList.add('scale-105')
    })
    divBox.addEventListener('mouseout', function () {
      const mask = document.getElementById(`story-mask-${index}`)
      const image = document.getElementById(`story-image-${index}`)
      mask.classList.add('hidden')
      image.classList.remove('scale-105')
    })

    storyList.appendChild(divBox)

  })

}

renderDymanic()

// ---- 包廂輪播相關 ----
function renderLiveItem() {
  const swiperWrapperLlive = document.getElementById('swiper-wrapper-live')
  for (let i = 0; i <= 20; i++) {
    const divBox = document.createElement('div')
    divBox.classList.add('swiper-slide')
    const item = `
    <div class="w-[55px]">
      <div class="w-[40px] cursor-pointer relative">
        <div class="rounded-full overflow-hidden">
          <img src="https://bruce-fe-fb.web.app/image/avator.png" alt="">
        </div>
        <div class="w-[10px] h-[10px] bg-green-400 ring ring-gray-900 rounded-full absolute bottom-0 right-0">
        </div>
      </div>
    </div>
  `
    divBox.innerHTML = item
    swiperWrapperLlive.appendChild(divBox)
  }


  new Swiper(".fb-live", {
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: "auto",
  });
}
renderLiveItem()
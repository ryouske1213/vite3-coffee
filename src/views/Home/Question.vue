<script setup>
import header_1 from "../../components/header_1.vue";
import footer_1 from "../../components/footer_1.vue";
</script>

<template>
  <div class="h-screen relative overflow-hidden bg-home">
    <div class="absolute top-0 h-full w-full overflow-y-auto">
      <header_1 />
      <main>
        <div class="w-full mt-[100px] flex justify-center">
          <div class="w-1/2">
            <div>
              <h1 class="text-3xl py-10">咖啡相關問題</h1>
              <h3 class="text-xl font-bold">如果咖啡豆受潮該怎辦</h3>
              <p class="text-blue-400 py-4">
                選擇合適的容器：
                選擇具有密封性能的咖啡儲存容器，最好是不透明的，以減少光線的影響。
                避免使用透明容器，因為陽光和人工光線可能會破壞咖啡豆的品質。
              </p>
              <p class="text-blue-400 py-4">
                使用防光包裝：
                如果咖啡豆是在原始包裝中購買的，請確保這些包裝是不透明的，具有氧氣阻隔性能，以降低氧氣進入的機會。
              </p>
              <p class="text-blue-400 py-4">
                避免多次開封：
                為了最大程度地保持咖啡豆的新鮮度，盡量避免頻繁地打開儲存容器。
                每次取出所需的咖啡量後，請立即將容器密封。
              </p>
            </div>
            <div>
              <h3 class="text-xl font-bold">如何選擇適合自己口味的咖啡豆</h3>
              <p class="text-blue-400 py-4">
                烘焙程度： 咖啡豆的烘焙程度會影響味道。
                淺度烘焙通常有更多的酸度和花香，而深度烘焙則會產生強烈的焦糖和巧克力味。
                選擇適合自己口味的烘焙程度，例如深度烘焙適合喜歡濃鬱口味的人，而中度或淺度烘焙適合喜歡更清新和酸度的口味的人。
              </p>
              <p class="text-blue-400 py-4">
                咖啡的香氣描述：
                咖啡包裝通常附帶關於咖啡的香氣描述，例如果香、巧克力、堅果、花香等。
                這些描述可以作為選擇咖啡的參考。
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer_1 class="text-black" />
    </div>
  </div>
</template>

<style></style>

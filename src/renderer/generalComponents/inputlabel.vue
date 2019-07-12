<template>
  <div style="display: flex;">
    <div class="knightrider-lazyscrollview-item"
         style="display: flex; flex-grow: 1; flex-shrink: 1; width: 100%;">
      <div class="kr-view"
           style="flex-direction: column; width: 100%;">
        <div class="kr-view "
             style="height: 0px;"></div>
        <div class="kr-view"
             style="flex-grow: 1; flex-shrink: 1; padding: 11px 20px; border-radius: 10px; background-color: rgb(255, 255, 255); margin-bottom: 2px; box-shadow: rgba(0, 0, 0, 0.02) 0px 0px 0px 1px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px, rgba(0, 0, 0, 0.05) 0px 2px 8px 0px;">
          <!-- react-empty: 2911 -->
          <div class="kr-view"
               style="flex-grow: 1; flex-shrink: 1;">
            <div class="kr-view"
                 style="flex-grow: 1; flex-shrink: 1; position:relative">
              <div class="kr-view">
                <div class="kr-view"
                     style="position: relative; cursor: pointer; width: 22px; height: 22px;">
                  <div class="kr-view"
                       style="width: 22px; height: 22px; background-color: white; position: absolute; border-radius: 100%; border-width: 2px; border-color: rgb(0, 170, 255); transform: scaleX(1) scaleY(1); opacity: 1;"></div>
                  <div class="kr-view"
                       style="width: 22px; height: 22px; align-items: center; justify-content: center; position: absolute; border-radius: 100%; background-color: rgb(0, 170, 255); border-color: rgb(0, 170, 255); border-width: 2px; transform: scaleX(0) scaleY(0); opacity: 0;">
                    <div class="kr-view"
                         style="width: 12px; height: 12px; color: white;"><svg width="100%"
                           height="100%"
                           viewBox="0 0 124 124">
                        <path fill="currentColor"
                              fill-rule="nonzero"
                              d="M112.506 8.3c1.867.188 3.64.675 5.277 1.615 4.52 2.596 6.97 7.91 6.01 13.032-.346 1.855-1.127 3.52-2.195 5.063a1937.574 1937.574 0 0 1-69.088 83.742c-.978 1.002-2.04 1.87-3.28 2.53a12.495 12.495 0 0 1-10.73.447c-1.29-.56-2.42-1.34-3.48-2.26a810.604 810.604 0 0 1-31.97-32.79c-1.644-1.99-2.73-4.31-2.99-6.9a12.468 12.468 0 0 1 .287-4.147c1.282-5.31 6.057-9.24 11.515-9.48 1.622-.07 3.256.18 4.782.74 1.773.644 3.288 1.687 4.635 2.993l21.35 21.9c19.95-24.18 39.24-48.92 59.86-72.532.49-.5.484-.497 1-.966.54-.444 1.084-.864 1.684-1.227 1.82-1.1 3.824-1.64 5.932-1.782.7-.01.695-.01 1.39.024z"></path>
                      </svg></div>
                  </div>
                </div>
              </div>
              <pre class="pre"
                   ref=pre><span /><br></pre>
              <textarea rows="3"
                        tabindex="0"
                        ref='content'
                        @input="changeContent"
                        class="kr-view mousetrap"
                        style="background-color: white; border-width: 0px; border-color: rgb(0, 170, 255); border-style: solid; color: rgb(61, 71, 77); border-radius: 0px; padding: 0px 10px; font-size: 14px; resize: none; width: 100%; outline: 0px; overflow-y: hidden; flex-grow: 1; flex-shrink: 1; line-height: 22px; height: 22px;"></textarea>

            </div>
          </div>
        </div>
        <div class="kr-view "
             style="height: 0px;"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    changeContent () {
      this.$refs.pre.innerHTML = this.$refs.content.value
    }
  }
}
</script>
<style scoped>
@import url("./style.css");
.contentwrapper {
  background-color: white;
  border-width: 0px;
  border-color: rgb(0, 170, 255);
  border-style: solid;
  color: rgb(61, 71, 77);
  border-radius: 0px;
  padding: 0px 10px;
  font-size: 14px;
  resize: none;
  width: 100%;
  outline: 0px;
  overflow-y: hidden;
  flex-grow: 1;
  flex-shrink: 1;
  line-height: 22px;
  height: 22px;
}
pre {
  display: block;
  visibility: hidden;
}
</style>

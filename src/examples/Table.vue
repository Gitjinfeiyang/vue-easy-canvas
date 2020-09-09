<template>
  <ec-canvas :width="window.innerWidth" :height="window.innerHeight" animate>
    <ec-scroll-view :styles="styles.scrollView" :renderOnDemand="true">
      <ec-view :styles="styles.tr">
        <ec-text :styles="styles.th">日期</ec-text>
        <ec-text :styles="styles.th">姓名</ec-text>
        <ec-text :styles="styles.th">地区</ec-text>
        <ec-text :styles="styles.th">城市</ec-text>
        <ec-text :styles="styles.th">详细地址</ec-text>
        <ec-text :styles="styles.th">邮编</ec-text>
      </ec-view>

      <ec-view :styles="styles.tr" v-for="(item,index) in tableData" :key="index">
        <ec-text :styles="styles.td">{{index}}</ec-text>
        <ec-text :styles="styles.td">{{item.date}}</ec-text>
        <ec-text :styles="styles.td">{{item.name}}</ec-text>
        <ec-text :styles="styles.td">{{item.province}}</ec-text>
        <ec-text :styles="styles.td">{{item.city}}</ec-text>
        <ec-text :styles="styles.td">{{item.address}}</ec-text>
        <ec-text :styles="styles.td">{{item.zip}}</ec-text>
      </ec-view>
    </ec-scroll-view>
  </ec-canvas>
</template>

<script>
export default {
  data() {
    return {
      tableData: getTableData(1000),
      window,
      styles: {
        scrollView: {
          height: window.innerHeight,
          width: window.innerWidth,
          direction: 'xy',
        },
        tr: {
          width: 600,
          display: 'flex',
          borderBottomWidth: 0.5,
          borderColor: '#999',
          padding: [10, 0],
        },
        td: {
          flex: 1,
          color: '#666',
          padding: [0, 5],
          display: 'block',
          maxLine: 1,
        },
        th: {
          flex: 1,
          padding: [0, 5],
          display: 'block',
          maxLine: 1,
          color: '#333',
          textAlign: 'center',
        },
        content: {
          maxLine: 1,
        },
      },
    }
  },
}

const data = {
  date: '2016-05-02',
  name: '王小虎',
  province: '上海',
  city: '普陀区',
  address: '上海市普陀区金沙江路 1518 弄',
  zip: 200333,
}
function getTableData(count = 100) {
  let list = []
  for (let i = 0; i < count; i++) {
    list.push(data)
  }
  return list
}
</script>
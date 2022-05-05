


const { AzNodeRest } = require("../../../plugins/nodeSrc/east")
const { getProviderApiVersion } = require("../../../plugins/nodeSrc/getProvider")
const { returnObjectInit } = require("../../../plugins/nodeSrc/returnObjectInit")

//AzNodeRest
module.exports = async function (item) {

var returnObject = new returnObjectInit(item,__filename.split('/').pop())
returnObject.isHealthy=true

item.id = `/subscriptions/${item.name}/providers/microsoft.authorization`

let classicAdmins = await AzNodeRest(`${item.id}/classicadministrators`,'2015-06-01')

  if (classicAdmins?.value.length > 0) {
      returnObject.isHealthy="review"
  }

returnObject.metadata = {classicAdmins:classicAdmins?.value}
//console.log(stashOrig)

return returnObject

}



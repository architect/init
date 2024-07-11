let learn = 'learn more about queue functions here: https://arc.codes/queues'

let nodeBody = `
  console.log(JSON.stringify(event, null, 2))
  return
`
let node = {
  esm: `// ${learn}
export async function handler (event) {${nodeBody}}`,
  cjs: `// ${learn}
exports.handler = async function queue (event) {${nodeBody}}`,
}


let deno = `// ${learn}
export async function handler (event: object) {
  console.log(JSON.stringify(event, null, 2))
  return
}`

let ruby = `# ${learn}
def handler(event:, context:)
  puts event
  true
end`

let python = `# ${learn}
def handler(event, context):
    print(event)
    return True`

module.exports = { node, deno, ruby, python }

# Mobile

Aplicativo React Native criado com **Expo** para acelerar o ciclo de desenvolvimento em Android, iOS e Web.

## Sobre o projeto

Este repositório contém o código‑fonte do app **mobile**. Ele utiliza **TypeScript**, **React Navigation** e **AsyncStorage** para construção de interfaces e persistência local.

## Pré‑requisitos

| Ferramenta | Versão recomendada |
|------------|-------------------|
| [Node.js](https://nodejs.org/) | ≥ 18 LTS |
| npm (ou Yarn/Pnpm) | ≥ 9 |
| [Expo CLI](https://docs.expo.dev) | `npm i -g expo-cli` |
| Emulador/Dispositivo Android | API 31 + |
| (Opcional) Xcode + iOS Simulator | ≥ 14 |

> 💡 Se preferir, você pode usar `npx expo` em vez de instalar a CLI globalmente.

## Instalação

```bash
# clone o repositório
$ git clone  https://github.com/desenvolvimentoidpi/couni-mobile-diligencia.git
$ cd mobile

# instale as dependências
$ npm install
```

## Executando o app

| Ação                   | Comando                 | Resultado |
|------------------------|-------------------------|-----------|
| DevTools + QR Code     | `npm start`             | Abre o **Expo DevTools** no navegador |
| Rodar em Android       | `npm run android`       | Envia o bundle para o emulador ou aparelho físico |
| Rodar em iOS (macOS)   | `npm run ios`           | Abre o **iOS Simulator** via Xcode |
| Rodar versão Web       | `npm run web`           | Inicia servidor no navegador padrão |

> ✅ Se ocorrerem problemas de cache, execute `expo start --clear`.



import { PrismaClient } from '@prisma/client';
/* eslint-disable-next-line  */
import { GuitarType } from '../../types/src';


const FIRST_SHOP_ITEM_UUID = '6d308040-96a2-4162-bea6-2338e9976540';
const SECOND_SHOP_ITEM_UUID = 'ab04593b-da99-4fe3-8b4b-e06d82e2efdd';

const FIRST_USER_ID = '66dd5f9fa0eacd15b6013533';
const SECOND_USER_ID = '66dda629a1299baeb1a37e4d';



function getShopItems() {
  return [
    {
      id: FIRST_SHOP_ITEM_UUID,
      name: "СURT Z30 Plus",
      description: "Гитара подходит как для старта обучения, так и для домашних занятий или использования в полевых условиях, например, в походах или для проведения уличных выступлений. Доступная стоимость, качество и надежная конструкция, а также приятный внешний вид, который сделает вас звездой вечеринки.",
      userId: FIRST_USER_ID,
      photo: "electro.jpg",
      type: GuitarType.Electric,
      code: "SO757575",
      stringsNumber: 4,
      price: 27000,
    },
    {
      id: SECOND_SHOP_ITEM_UUID,
      name: 'Fender California Newporter Player Acoustic',
      description: 'Things have certainly changed around here. I remember when this was all farmland as far the eye could see. Old man Peabody owned all of this. He had this crazy idea about breeding pine trees.',
      type: GuitarType.Acoustic,
      code: 'code-2',
      userId: SECOND_USER_ID,
      stringsNumber: 7,
      price: 20000,
    }
  ]
}

async function seedDb(prismaClient: PrismaClient) {


  const mockShopItem = getShopItems();
  for (const shopItem of mockShopItem) {
    await prismaClient.shopItem.create({
      data: {
        ...shopItem
      }
    })
  }

  console.info('🌱 Database seeded successfully!');
}

async function bootstrap() {
  const prismaClient = new PrismaClient();

  try {
    await seedDb(prismaClient);
    globalThis.process.exit(0);
  } catch (error: unknown) {
    console.error(error);
    globalThis.process.exit(1);
  } finally {
    await prismaClient.$disconnect();
  }
}

bootstrap();

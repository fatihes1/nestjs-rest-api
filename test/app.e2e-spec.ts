import { Test } from "@nestjs/testing";
import * as pactum from 'pactum';
import { AppModule } from "../src/app.module";
import { INestApplication, ValidationPipe } from "@nestjs/common";
import { PrismaService } from "../src/prisma/prisma.service";
import { AuthDto } from "../src/auth/dto";

describe('App e2e', () => {
  let app: INestApplication;
  let prisma: PrismaService;
  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({
        whitelist: true,
      }),
    );
    await app.init();
    await app.listen(3333);

    prisma = app.get(PrismaService);
    await prisma.cleanDb();

  });

  afterAll(() => {
    app.close();
  });

  describe("Auth", () => {
    describe("Signup", () => {
      it("should create a new user", () => {
        const dto: AuthDto
        return pactum.spec().post('http://localhost:3333/auth/signup').withBody()

      });
    });

    describe("Signin", () => {
      it.todo("should return a token");
    });
  });

  describe("User", () => {
    describe("Get me", () => {});
    describe("Edit user", () => {});
  });

  describe("Bookmarks", () => {
    describe("Get all bookmarks", () => {});
    describe("Get bookmark with id", () => {});
    describe("Create bookmark", () => {});
    describe("Edit bookmark", () => {});
    describe("Delete bookmark", () => {});
  });

});
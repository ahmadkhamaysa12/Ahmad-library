import sideImage from '../../assets/side.png';
import LoginForm from './LoginForm';

export default function Login() {
  return (
    <main className="min-h-dvh md:h-dvh">
      <div className="grid h-full md:grid-cols-2">
        <section className="flex items-center justify-center overflow-y-auto px-4 py-8 md:py-0">
          <div className="w-full max-w-lg lg:max-w-xl xl:max-w-2xl">
            <LoginForm />
          </div>
        </section>

        <aside className="hidden md:block">
          <img
            src={sideImage}
            alt="Login illustration"
            className="h-full w-full object-cover"
            loading="eager"
            draggable={false}
          />
        </aside>
      </div>
    </main>
  );
}

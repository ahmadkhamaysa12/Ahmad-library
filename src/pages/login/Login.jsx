import sideImage from '../../assets/side.png';
import LoginForm from './LoginForm';

export default function Login() {
  return (
    <main className="min-h-dvh w-full">
      <div className="grid min-h-dvh md:grid-cols-2">
        {/* Form */}
        <section className="flex items-center justify-center px-4 py-8">
          <div className="w-full max-w-lg lg:max-w-xl xl:max-w-2xl">
            <LoginForm />
          </div>
        </section>

        {/* Image */}
        <aside className="hidden md:block">
          <img
            src={sideImage}
            alt="Login illustration"
            className="h-full min-h-dvh w-full object-cover"
            loading="eager"
            draggable={false}
          />
        </aside>
      </div>
    </main>
  );
}

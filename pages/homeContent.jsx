import { motion } from "framer-motion";

export default function HomeContent() {
  return (
    <div className="w-full h-[calc(100vh-100px)]">
      {/* Hero Section */}
      <div className="relative w-full h-[80vh] md:h-[90vh]">
        <img
          src="/home.jpg"
          alt="Isuri Computers"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg"
          >
            Isuri Computers
          </motion.h1>

          {/* Animated slogans */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.5,
              delay: 0.5,
            }}
            className="text-gray-200 text-lg md:text-2xl mt-3 font-medium"
          >
            Your Trusted Partner in Technology
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.3,
              delay: 1,
            }}
            className="text-gray-300 text-base md:text-xl mt-2"
          >
            Laptops • Accessories • Repairs • Custom Builds
          </motion.p>
        </div>
      </div>

      {/* Featured Section */}
      <div className="w-full py-12 bg-white flex flex-col items-center px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
          Why Choose Isuri Computers?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full max-w-6xl">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 shadow-lg rounded-xl bg-gray-100"
          >
            <h3 className="text-xl font-semibold mb-2">Genuine Products</h3>
            <p className="text-gray-600">
              100% original laptops, PC components and accessories.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 shadow-lg rounded-xl bg-gray-100"
          >
            <h3 className="text-xl font-semibold mb-2">Expert Repairs</h3>
            <p className="text-gray-600">
              Skilled technicians with quick and reliable repair services.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 shadow-lg rounded-xl bg-gray-100"
          >
            <h3 className="text-xl font-semibold mb-2">Affordable Prices</h3>
            <p className="text-gray-600">
              Best deals and competitive prices in town.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

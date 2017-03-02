package org.virtue.utility;

import java.security.SecureRandom;

public class Utils {
	
	private static SecureRandom SECURE_RANDOM;
	
	public static final int getMoveDirection(int xOffset, int yOffset) {
		if (xOffset < 0) {
			if (yOffset < 0)
				return 5;
			else if (yOffset > 0)
				return 0;
			else
				return 3;
		} else if (xOffset > 0) {
			if (yOffset < 0)
				return 7;
			else if (yOffset > 0)
				return 2;
			else
				return 4;
		} else {
			if (yOffset < 0)
				return 6;
			else if (yOffset > 0)
				return 1;
			else
				return -1;
		}
	}

	public static final String[] NUMBERS = { "one", "two", "three", "four",
			"five" };

	public static final byte[] DIRECTION_DELTA_X = new byte[] { -1, 0, 1, -1,
			1, -1, 0, 1 };
	public static final byte[] DIRECTION_DELTA_Y = new byte[] { 1, 1, 1, 0, 0,
			-1, -1, -1 };

	private static final byte[][] ANGLE_DIRECTION_DELTA = { { 0, -1 },
			{ -1, -1 }, { -1, 0 }, { -1, 1 }, { 0, 1 }, { 1, 1 }, { 1, 0 },
			{ 1, -1 } };

	public static int getNpcMoveDirection(int dd) {
		return getNpcMoveDirection(DIRECTION_DELTA_X[dd], DIRECTION_DELTA_Y[dd]);
	}

	public static byte[] getDirection(int angle) {
		int v = angle >> 11;
		return ANGLE_DIRECTION_DELTA[v];
	}
	
	public static final int getAngle(int xOffset, int yOffset) {
		return ((int) (Math.atan2(-xOffset, -yOffset) * 2607.5945876176133)) & 0x3fff;
	}
	
	public static int getNpcMoveDirection(int dx, int dy) {
		if (dx == 0 && dy > 0)
			return 0;
		if (dx > 0 && dy > 0)
			return 1;
		if (dx > 0 && dy == 0)
			return 2;
		if (dx > 0 && dy < 0)
			return 3;
		if (dx == 0 && dy < 0)
			return 4;
		if (dx < 0 && dy < 0)
			return 5;
		if (dx < 0 && dy == 0)
			return 6;
		if (dx < 0 && dy > 0)
			return 7;
		return -1;
	}
	
	public static final int random(int min, int max) {
		final int n = Math.abs(max - min);
		return Math.min(min, max) + (n == 0 ? 0 : random(n));
	}

	public static final double random(double min, double max) {
		final double n = Math.abs(max - min);
		return Math.min(min, max) + (n == 0 ? 0 : random((int) n));
	}

	public static final int next(int max, int min) {
		return min + (int) (SECURE_RANDOM.nextDouble() * ((max - min) + 1));
	}

	public static final int random(int maxValue) {
		if (maxValue <= 0)
			return 0;
		return SECURE_RANDOM.nextInt(maxValue);
	}

	public static final double random(double maxValue) {
		return SECURE_RANDOM.nextDouble() * maxValue;
	}

	public static final double randomDouble() {
		return SECURE_RANDOM.nextDouble();
	}

	public static final char[] VALID_CHARS = { '_', 'a', 'b', 'c', 'd', 'e',
			'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
			's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4',
			'5', '6', '7', '8', '9' };

}
